import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { MixerHorizontalIcon } from "@radix-ui/react-icons";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { Button } from "@/components/ui/button";

const ativosCheckboxData = [
  { id: "cr", label: "CR" },
  { id: "cri", label: "CRI" },
  { id: "cra", label: "CRA" },
  { id: "debenture", label: "Debenture" },
  { id: "fidc", label: "FIDC" },
];

const ofertasCheckboxData = [
  { id: "1", label: "ICVM 400" },
  { id: "2", label: "ICVM 476" },
  { id: "3", label: "Privada" },
  { id: "4", label: "RCVM 160 - Rito Ordinário" },
  { id: "5", label: "RCVM 160 - Rito Automático" },
];

export function Filters({ ativos, ofertas }: { ativos: string | string[], ofertas: string | string[]}) {
  return (
    <Sheet>
      <SheetTrigger asChild><Button size="icon" variant="outline"><MixerHorizontalIcon /></Button></SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Filtros</SheetTitle>
          <SheetDescription>
            Selecione os filtros para visualizar as emissões
          </SheetDescription>
        </SheetHeader>
        <form action="/list/" method="get" className="grid gap-4 pt-4">
          <Collapsible defaultOpen className="space-y-3">
            <CollapsibleTrigger>Ativos</CollapsibleTrigger>
            <CollapsibleContent>
              <div className="space-y-2">
                {ativosCheckboxData.map(({ id, label }) => (
                  <div className="flex gap-2" key={id}>
                    <Checkbox
                      type="submit"
                      id={id}
                      name="ativos"
                      value={id}
                      defaultChecked={ativos && typeof ativos !== "string" ? ativos.some((e) => e === id) : ativos === id}
                    />
                    <Label htmlFor={id}>{label}</Label>
                  </div>
                ))}
              </div>
            </CollapsibleContent>
          </Collapsible>
          <Collapsible defaultOpen className="space-y-3">
            <CollapsibleTrigger>Ofertas</CollapsibleTrigger>
            <CollapsibleContent>
              <div className="space-y-2">
                {ofertasCheckboxData.map(({ id, label }) => (
                  <div className="flex gap-2" key={id}>
                    <Checkbox
                      type="submit"
                      id={id}
                      name="ofertas"
                      value={id}
                      defaultChecked={ofertas && typeof ofertas !== "string" ? ofertas.some((e) => e === id) : ofertas === id}
                    />
                    <Label htmlFor={id}>{label}</Label>
                  </div>
                ))}
              </div>
            </CollapsibleContent>
          </Collapsible>
        </form>
      </SheetContent>
    </Sheet>
  )
}