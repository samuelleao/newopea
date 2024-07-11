import { Badge } from "@/components/ui/badge";
import { getEmission, getEmissionDocuments, getEmissionUnitPrice } from "../services";
import { Emission, EmissionDocuments, EmissionUnityPrice } from "../types";
import { Card, CardDescription, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Link1Icon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";

export default async function Page({ params: { id } }: { params: { id: number } }) {
  const emissionQuery: Emission = await getEmission(id)
  const emission = emissionQuery.content

  const emissionUnitPrice: EmissionUnityPrice = await getEmissionUnitPrice(emission.operacao.CodigoOpea)
  const emissionDocuments: EmissionDocuments = await getEmissionDocuments(emission.idCedoc)

  return (
    <main className="container flex items-start justify-start">
      <aside className="w-80 pt-10 space-y-4 pr-8 sticky top-14 min-h-screen border-r">
        <Link href="/list" className="block text-sm text-muted-foreground hover:text-accent-foreground" >← Back to Templates</Link>
        <Badge variant="outline">{emission.statusPassivoOperacao.value}</Badge>
        <div className="space-y-2">
          <h1 className="text-4xl font-bold">{emission.apelidoOperacao}</h1>
          <ul className="grid gap-3">
            <li className="flex items-center pt-2 justify-between text-sm">
              <span className="text-muted-foreground">Código opea</span><span>{emission.operacao.CodigoOpea}</span>
            </li>
            <li className="flex items-center pt-2 justify-between text-sm">
              <span className="text-muted-foreground">ISIN</span><span>{emission.codigoIsin}</span>
            </li>
            <li className="flex items-center pt-2 justify-between text-sm">
              <span className="text-muted-foreground">IF</span><span>{emission.codigoCetipBbb}</span>
            </li>
          </ul>
        </div>
      </aside>
      <div className="pl-8 py-10 flex-1 space-y-8">
        <section className="space-y-4">
          <h2 className="text-lg font-medium text-primary">Preços Unitários</h2>
          <div className="grid grid-cols-3 gap-4">
            {emissionUnitPrice.content.items.map((item) => (
              <Card>
                <CardHeader className="pb-6">
                  <CardDescription>{item.data}</CardDescription>
                  <CardTitle className="text-2xl">{item.moeda.simbolo} {item.pu}</CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>
        <section>
          <Card className="xl:col-span-2">
            <CardHeader className="flex flex-row items-center">
              <div className="grid gap-2">
                <CardTitle className="text-lg">Documentos</CardTitle>
                <CardDescription>
                  Baixe aqui os arquivos relacionados a esta operação
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Arquivo</TableHead>
                    <TableHead className="text-right"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {emissionDocuments.children.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell>
                        <div className="font-medium flex items-center gap-2">{item.categoryConditionDescription}</div>
                      </TableCell>
                      <TableCell className="text-right"><Button variant="outline" size="icon"><Link target="_blank" href={item.url}><Link1Icon /></Link></Button></TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </section>
        <section className="space-y-4">
          <h3 className="text-lg font-medium text-primary">Características</h3>
          <div className="grid grid-cols-2 gap-8">
            <ul className="grid gap-3">
              <li className="flex items-center pt-2 justify-between text-sm">
                <span className="text-muted-foreground">Emissor</span><span>{emission.emissor.descricao}</span>
              </li>
              <li className="flex items-center pt-2 justify-between text-sm">
                <span className="text-muted-foreground">Emissão</span><span>{emission.emissao}</span>
              </li>
              <li className="flex items-center pt-2 justify-between text-sm">
                <span className="text-muted-foreground">Classe</span><span>{emission.classeOperacao.descricao}</span>
              </li>
              <li className="flex items-center pt-2 justify-between text-sm">
                <span className="text-muted-foreground">Concentração</span><span>{emission.concentracao.value}</span>
              </li>
              <li className="flex items-center pt-2 justify-between text-sm">
                <span className="text-muted-foreground">Agente Fiduciário</span><span>{emission.agenteFiduciario.nomeSimplificado}</span>
              </li>
              <li className="flex items-center pt-2 justify-between text-sm">
                <span className="text-muted-foreground">Série</span><span>{emission.serie}</span>
              </li>
            </ul>
            <ul className="grid gap-3">
              <li className="flex items-center pt-2 justify-between text-sm">
                <span className="text-muted-foreground">Regime Fiduciário</span><span>{emission.regimeFiduciario ? "Sim" : "Não"}</span>
              </li>
              <li className="flex items-center pt-2 justify-between text-sm">
                <span className="text-muted-foreground">Natureza</span><span>{emission.naturezaOperacao.descricao}</span>
              </li>
              <li className="flex items-center pt-2 justify-between text-sm">
                <span className="text-muted-foreground">Data Emissão</span><span>{emission.dataEmissaoSerie}</span>
              </li>
              <li className="flex items-center pt-2 justify-between text-sm">
                <span className="text-muted-foreground">Preço Emitido</span><span>{emission.precoUnitario}</span>
              </li>
              <li className="flex items-center pt-2 justify-between text-sm">
                <span className="text-muted-foreground">Devedor</span><span>{emission.codigoCetipBbb}</span>
              </li>
              <li className="flex items-center pt-2 justify-between text-sm">
                <span className="text-muted-foreground">Segmento</span><span>{emission.descricaoSegmentoOperacao}</span>
              </li>
            </ul>
            <ul className="grid gap-3">
              <li className="flex items-center pt-2 justify-between text-sm">
                <span className="text-muted-foreground">Data de Vencimento</span><span>{emission.dataVencimentoSerie}</span>
              </li>
              <li className="flex items-center pt-2 justify-between text-sm">
                <span className="text-muted-foreground">Quantidade Emitida</span><span>{emission.quantidadeEmitida}</span>
              </li>
              <li className="flex items-center pt-2 justify-between text-sm">
                <span className="text-muted-foreground">Periodicidade Pagamento Juros</span><span>{emission.pagamentoPassivo.periodicidadeFrequenciaJuros.descricao}</span>
              </li>
              <li className="flex items-center pt-2 justify-between text-sm">
                <span className="text-muted-foreground">Periodicidade Amortização</span><span>{emission.pagamentoPassivo.periodicidadeFrequenciaAmortizacao.descricao}</span>
              </li>
              <li className="flex items-center pt-2 justify-between text-sm">
                <span className="text-muted-foreground">Remuneração</span><span>{emission.remuneracao}</span>
              </li>
              <li className="flex items-center pt-2 justify-between text-sm">
                <span className="text-muted-foreground">Volume Emitido</span><span>{emission.volumeEmitido}</span>
              </li>
            </ul>
            <ul className="grid gap-3">
              <li className="flex items-center pt-2 justify-between text-sm">
                <span className="text-muted-foreground">Período Atualização Monetária</span><span>N/A</span>
              </li>
              <li className="flex items-center pt-2 justify-between text-sm">
                <span className="text-muted-foreground">Meses Atualização Monetária</span><span>N/A</span>
              </li>
              <li className="flex items-center pt-2 justify-between text-sm">
                <span className="text-muted-foreground">Oferta</span><span>{emission.tipoOferta.value}</span>
              </li>
              <li className="flex items-center pt-2 justify-between text-sm">
                <span className="text-muted-foreground">Quantidade Integralizada</span><span>{emission.pagamentoPassivo.integralizacaoList[0].quantidadeIntegralizada}</span>
              </li>
              <li className="flex items-center pt-2 justify-between text-sm">
                <span className="text-muted-foreground">Possibilidade Pré-Pagamento</span><span>{emission.possibilidadePrePagamento.value}</span>
              </li>
              <li className="flex items-center pt-2 justify-between text-sm">
                <span className="text-muted-foreground">Prêmio Pré-Pagamento</span><span>{emission.existenciaPremioPrePagamento ? "Sim" : "Não"}</span>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}
