import Link from "next/link";
import { EmissionItem } from "../types";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Building2, FileArchive, Tractor, WalletCards, WalletMinimal, WalletMinimalIcon } from "lucide-react";
import { ReactElement } from "react";
import { ListData, ListLabel, ListLine, ListWrapper } from "@/components/ui/list";
import dayjs from 'dayjs';
import 'dayjs/plugin/utc';
import 'dayjs/plugin/duration';
dayjs.extend(require('dayjs/plugin/utc'));
dayjs.extend(require('dayjs/plugin/duration'));

const iconsEmissions: { [key: string]: ReactElement<any, any> } = {
  cr: <WalletMinimal size={20} strokeWidth={1.25} />,
  cri: <Building2 size={20} strokeWidth={1.25} />,
  cra: <Tractor size={20} strokeWidth={1.25} />,
  debenture: <FileArchive size={20} strokeWidth={1.25} />,
  fidc: <WalletCards size={20} strokeWidth={1.25} />,
}

export function EmissionsCard({ item }: { item: EmissionItem}) {
  return (
    <Link href={`/details/${item.codigoIf}`} key={item.id} aria-label="Visualizar detalhes">
      <Card className="hover:border-primary group overflow-hidden">
        <CardHeader className="grid grid-cols-[3rem_2fr] gap-2 items-start">
          <span className="flex size-12 items-center justify-center border rounded">
            {iconsEmissions[item.codigoOpea.split('.')[0].toLowerCase()] || <WalletMinimalIcon />}
          </span>
          <div>
            <CardTitle className="text-sm md:text-lg text-ellipsis overflow-hidden whitespace-nowrap max-w-[70%] !leading-none pb-1"> {item.tipoIndexador} {item.nomeDevedor}</CardTitle>
            <CardDescription className="text-sm text-ellipsis overflow-hidden whitespace-nowrap w-full">{item.codigoIf}</CardDescription>
          </div>
        </CardHeader>
        <Separator />
        <CardContent className="pt-4">
          <ListWrapper>
            <ListLine>
              <ListLabel>Emissão</ListLabel><ListData>{item.emissao}</ListData>
            </ListLine>
            <ListLine>
              <ListLabel>Série</ListLabel><ListData>{item.serie}</ListData>
            </ListLine>
            <ListLine>
              <ListLabel>Data de vencimento</ListLabel><ListData>{dayjs(item.dataVencimento).format('DD/MM/YYYY')}</ListData>
            </ListLine>
            <ListLine>
              <ListLabel>Remuneração</ListLabel><ListData>{item.indexador}</ListData>
            </ListLine>
            <ListLine>
              <ListLabel>Código ISIN</ListLabel><ListData>{item.isin}</ListData>
            </ListLine>
            <ListLine>
              <ListLabel>Código Opea</ListLabel><ListData>{item.codigoOpea}</ListData>
            </ListLine>
            <ListLine>
              <ListLabel>Oferta</ListLabel><ListData>{item.oferta}</ListData>
            </ListLine>
            <ListLine>
              <ListLabel>Concentração</ListLabel><ListData>{item.concentracao}</ListData>
            </ListLine>
            <ListLine>
              <ListLabel>Master Servicer</ListLabel><ListData className="w-[50%] whitespace-nowrap overflow-hidden text-ellipsis">{item.masterService}</ListData>
            </ListLine>
          </ListWrapper>
        </CardContent>
        <CardFooter>
          <Button variant="outlinePrimary" className="w-full">Visualizar detalhes</Button>
        </CardFooter>
      </Card>
    </Link>
  )
}