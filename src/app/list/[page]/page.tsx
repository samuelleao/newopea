import PaginationComponent from "@/components/pagination"
import { getComissions } from "../services"
import Link from "next/link"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import dayjs from 'dayjs';
import 'dayjs/plugin/utc';
import 'dayjs/plugin/duration';
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { ModeToggle } from "@/components/mode-toggle";
import { MixerHorizontalIcon } from "@radix-ui/react-icons";

dayjs.extend(require('dayjs/plugin/utc'));
dayjs.extend(require('dayjs/plugin/duration'));

export default async function Page({ params: { page } }: { params: { page: number } }) {
  const comissions: EmissionsType = await getComissions(page)
  return (
    <div>
      <header className="py-20 relative overflow-hidden">
        <div className="container max-w-xl text-center relative z-10">
          <h1 className="text-2xl font-semibold">Emissões</h1>
          <p className="text-muted-foreground pb-4">Visualize e filtre as emissões e acesse seus detalhes</p>
          <div className="flex gap-2">
            <Input placeholder="Pesquisar por..." />
            <Button size="icon" variant="outline"><MixerHorizontalIcon /></Button>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="flex absolute -top-96 start-1/2 transform -translate-x-1/2"
        >
          <div className="bg-gradient-to-r from-background/50 to-background blur-3xl w-[25rem] h-[44rem] rotate-[-60deg] transform -translate-x-[10rem]" />
          <div className="bg-gradient-to-tl blur-3xl w-[90rem] h-[50rem] rounded-full origin-top-left -rotate-12 -translate-x-[15rem] from-primary-foreground via-primary-foreground to-background" />
        </div>
      </header>
      <div className="container">
        <div className=" grid grid-cols-4 gap-4">
          {comissions.content.emissoes.items.map((item) => (
            <Link href={`/details/${item.codigoIf}`} key={item.id} aria-label="Visualizar detalhes">
              <Card className="hover:border-accent-foreground">
                <CardHeader>
                  <CardTitle className="text-lg text-ellipsis overflow-hidden whitespace-nowrap w-full"><span className="text-muted-foreground">{item.codigoIf}</span> {item.tipoIndexador} {item.nomeDevedor}</CardTitle>
                  <CardDescription>Resumo da emissão</CardDescription>
                </CardHeader>
                <Separator />
                <CardContent className="pt-4">
                  <ul className="grid gap-3">
                    <li className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Emissão</span><span>{item.emissao}</span>
                    </li>
                    <li className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Série</span><span>{item.serie}</span>
                    </li>
                    <li className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Data de vencimento</span><span>{dayjs(item.dataVencimento).format('DD/MM/YYYY')}</span>
                    </li>
                    <li className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Remuneração</span><span>{item.indexador}</span>
                    </li>
                    <li className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Código ISIN</span><span>{item.isin}</span>
                    </li>
                    <li className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Código Opea</span><span>{item.codigoOpea}</span>
                    </li>
                    <li className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Oferta</span><span>{item.oferta}</span>
                    </li>
                    <li className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Concentração</span><span>{item.concentracao}</span>
                    </li>
                    <li className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Master Servicer</span><span className="w-[50%] whitespace-nowrap overflow-hidden text-ellipsis">{item.masterService}</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">Visualizar detalhes</Button>
                </CardFooter>
              </Card>
            </Link>
          ))}

        </div>
        <div className="w-full flex justify-center items-center py-8">
            <PaginationComponent
              lastPage={comissions.content.emissoes.lastPage}
              totalCount={comissions.content.emissoes.totalCount}
              hasItems={comissions.content.emissoes.hasItems}
              pageSize={Number(comissions.content.emissoes.pageSize)}
              pageIndex={page}
            />
          </div>
      </div>
    </div>
  )
}