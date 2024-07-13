'use client'

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Error, InputGroup, InputGroupWrapper } from "@/components/ui/input-group";
import { Controller, useForm } from "react-hook-form";
import { EmissionForm } from "./types";
import { schema } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Calendar } from "@/components/ui/calendar";
import dayjs from 'dayjs';
import 'dayjs/plugin/utc';
import 'dayjs/plugin/duration';
import { CalendarIcon } from "@radix-ui/react-icons";
import { useRef, useTransition } from "react";
import { createEmission } from "./actions";
import { toast } from "sonner";
dayjs.extend(require('dayjs/plugin/utc'));
dayjs.extend(require('dayjs/plugin/duration'));
import { PatternFormat } from "react-number-format"

export function Form() {
  const form = useForm<EmissionForm>({
    resolver: zodResolver(schema),
    mode: "all"
  });

  const [isPending, startTransition] = useTransition();

  const error = form.formState.errors;

  const formRef = useRef<HTMLFormElement>(null)

  function sendForm(data: EmissionForm) {
    startTransition(async () => {
      const { status } = await createEmission(data);
      if (status === 201) {
        form.reset();
        toast("Emissão criada com sucesso", {
          description: "Sua emissão foi criada com sucesso e já está disponível para a comunidade! 🎉",
          action: {
            label: "Ok",
            onClick: () => console.log("Ok"),
          },
        })
      }
    });
  }

  return (
    <form ref={formRef} onSubmit={form.handleSubmit(sendForm)}>
      <ScrollArea className="h-[70vh] -mx-6 px-6">
        <section>
          <h3 className="text-sm font-semibold py-4">🧔🏻 Informações Básicas</h3>
          <InputGroup label="Nome da Emissão" {...form.register("informacoesBasicas.nomeEmissao")} error={error.informacoesBasicas?.nomeEmissao} />
          <InputGroupWrapper>
            <Label>Tipo de Título</Label>
            <Controller
              name="informacoesBasicas.tipoTitulo"
              control={form.control}
              render={({ field }) => {
                return (
                  <ToggleGroup className="justify-start" value={field.value} onValueChange={field.onChange} type="single">
                    <ToggleGroupItem value={"CRI"}>CRI</ToggleGroupItem>
                    <ToggleGroupItem value={"CRA"}>CRA</ToggleGroupItem>
                    <ToggleGroupItem value={"Debêntures"}>Debêntures</ToggleGroupItem>
                  </ToggleGroup>
                );
              }}
            />
            {error.informacoesBasicas?.tipoTitulo && <Error>{error.informacoesBasicas.tipoTitulo.message}</Error>}
          </InputGroupWrapper>
          <div className="grid grid-cols-2 gap-4">
            <InputGroupWrapper>
              <Label>Data de emissão</Label>
              <Controller
                name="informacoesBasicas.dataEmissao"
                control={form.control}
                render={({ field }) => {
                  return (
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button className="w-full flex justify-start gap-2  pl-4  text-left font-normal" variant="outline">
                          <CalendarIcon className=" h-4 w-4 opacity-50" />
                          {field.value ? dayjs(field.value).format('DD/MM/YYYY') : <span>Selecionar data</span>}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          className="rounded-md border"
                        />
                      </PopoverContent>
                    </Popover>
                  );
                }}
              />
              {error.informacoesBasicas?.dataEmissao && <Error>{error.informacoesBasicas.dataEmissao.message}</Error>}
            </InputGroupWrapper>
            <InputGroupWrapper>
              <Label>Data de Vencimento</Label>
              <Controller
                name="informacoesBasicas.dataVencimento"
                control={form.control}
                render={({ field }) => {
                  return (
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button className="w-full flex justify-start gap-2  pl-4  text-left font-normal" variant="outline">
                          <CalendarIcon className=" h-4 w-4 opacity-50" />
                          {field.value ? dayjs(field.value).format('DD/MM/YYYY') : <span>Selecionar data</span>}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          className="rounded-md border"
                        />
                      </PopoverContent>
                    </Popover>
                  );
                }}
              />
              {error.informacoesBasicas?.dataVencimento && <Error>{error.informacoesBasicas.dataVencimento.message}</Error>}
            </InputGroupWrapper>
          </div>
          <InputGroup label="Código ISIN" {...form.register("informacoesBasicas.codigoISIN")} error={error.informacoesBasicas?.codigoISIN} />
        </section>

        <section>
          <Separator />
          <h3 className="text-sm font-semibold py-4">💰 Detalhes Financeiros</h3>
          <InputGroup label="Valor Nominal" type="number" {...form.register("detalhesFinanceiros.valorNominal")} error={error.detalhesFinanceiros?.valorNominal} />
          <InputGroup label="Taxa de Remuneração" {...form.register("detalhesFinanceiros.taxaRemuneracao")} error={error.detalhesFinanceiros?.taxaRemuneracao} />
          <InputGroupWrapper>
            <Label>Forma de Pagamento dos Juros</Label>
            <Controller
              name="detalhesFinanceiros.formaPagamentoJuros"
              control={form.control}
              render={({ field }) => {
                return (
                  <ToggleGroup className="justify-start" value={field.value} onValueChange={field.onChange} type="single">
                    <ToggleGroupItem value={"Mensal"}>Mensal</ToggleGroupItem>
                    <ToggleGroupItem value={"Semestral"}>Semestral</ToggleGroupItem>
                    <ToggleGroupItem value={"Anual"}>Anual</ToggleGroupItem>
                  </ToggleGroup>
                );
              }}
            />
            {error.detalhesFinanceiros?.formaPagamentoJuros && <Error>{error.detalhesFinanceiros.formaPagamentoJuros.message}</Error>}
          </InputGroupWrapper>
          <InputGroup label="Garantias Associadas" {...form.register("detalhesFinanceiros.garantiasAssociadas")} error={error.detalhesFinanceiros?.garantiasAssociadas} />
        </section>

        <section>
          <Separator />
          <h3 className="text-sm font-semibold py-4">🧑🏾‍🦱 Informações do Emissor</h3>
          <InputGroup label="Nome do Emissor" {...form.register("informacoesEmissor.nomeEmissor")} error={error.informacoesEmissor?.nomeEmissor} />
          <Controller
            control={form.control}
            name="informacoesEmissor.cnpjEmissor"
            defaultValue=""
            render={({ field: { onChange, name, value } }) => (
              <PatternFormat
                format={"##.###.###/####-##"}
                mask="_"
                label="CNPJ do Emissor"
                value={value}
                error={error.informacoesEmissor?.cnpjEmissor}
                onChange={onChange}
                customInput={InputGroup}
                name={name}
              />
            )}
          />
          <InputGroup label="Nome do Responsável" {...form.register("informacoesEmissor.dadosContatoResponsavel.nome")} error={error.informacoesEmissor?.dadosContatoResponsavel?.nome} />
          <InputGroup label="Telefone do Responsável" {...form.register("informacoesEmissor.dadosContatoResponsavel.telefone")} error={error.informacoesEmissor?.dadosContatoResponsavel?.telefone} />
          <InputGroup label="Email do Responsável" type="email" {...form.register("informacoesEmissor.dadosContatoResponsavel.email")} error={error.informacoesEmissor?.dadosContatoResponsavel?.email} />
        </section>

        <section>
          <Separator />
          <h3 className="text-sm font-semibold py-4">📄 Documentação Necessária</h3>
          <InputGroup type="url" label="Prospecto da Emissão (URL)" {...form.register("documentacaoNecessaria.prospectoEmissao")} error={error.documentacaoNecessaria?.prospectoEmissao} />
          <InputGroup type="url" label="Relatórios Financeiros (URL)" {...form.register("documentacaoNecessaria.relatoriosFinanceiros")} error={error.documentacaoNecessaria?.relatoriosFinanceiros} />
          <InputGroup type="url" label="Contratos de Garantia (URL)" {...form.register("documentacaoNecessaria.contratosGarantia")} error={error.documentacaoNecessaria?.contratosGarantia} />
        </section>

        <section className="py-4">
          <Separator />
          <h3 className="text-sm font-semibold py-4">+ Informações Adicionais</h3>
          <InputGroup label="Objetivo da Emissão" {...form.register("informacoesAdicionais.objetivoEmissao")} error={error.informacoesAdicionais?.objetivoEmissao} />
          <InputGroup label="Perfil dos Investidores" {...form.register("informacoesAdicionais.perfilInvestidores")} error={error.informacoesAdicionais?.perfilInvestidores} />
          <InputGroup label="Informações sobre Distribuição" {...form.register("informacoesAdicionais.informacoesDistribuicao")} error={error.informacoesAdicionais?.informacoesDistribuicao} />
        </section>

      </ScrollArea>
      <section>
        <Separator className="-mx-6 w-auto " />
        <div className="flex justify-end pt-4">
          <Button disabled={!form.formState.isValid} className="mt-2 md:w-max w-full" type="submit" loading={isPending} loadingText="Finalizando...">
            Finalizar cadastro
          </Button>
        </div>
      </section>
    </form>
  );
}
