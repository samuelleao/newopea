import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MixerHorizontalIcon } from "@radix-ui/react-icons";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";

const filters = [
  {
    label: "Ativos",
    items: [
      { id: "cr", label: "CR" },
      { id: "cri", label: "CRI" },
      { id: "cra", label: "CRA" },
      { id: "debenture", label: "Debenture" },
      { id: "fidc", label: "FIDC" },
    ],
    prop: {
      key: "active",
      search: "ativos"
    }
  },
  {
    label: "Ofertas",
    items: [
      { id: "1", label: "ICVM 400" },
      { id: "2", label: "ICVM 476" },
      { id: "3", label: "Privada" },
      { id: "4", label: "RCVM 160 - Rito Ordinário" },
      { id: "5", label: "RCVM 160 - Rito Automático" },
    ],
    prop: {
      key: "offers",
      search: "ofertas"
    }
  }
];

interface FiltersProps {
  ativos: string | string[];
  ofertas: string | string[];
}

export function Filters({ ativos, ofertas }: FiltersProps) {
  const filterProps: FiltersProps = { ativos, ofertas };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" variant="outline">
          <MixerHorizontalIcon />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Filtros</SheetTitle>
          <SheetDescription>
            Selecione os filtros para visualizar as emissões
          </SheetDescription>
        </SheetHeader>
        <form action="/" method="get" className="grid gap-4 pt-4">
          {filters.map((filter) => (
            <Collapsible key={filter.label} defaultOpen className="space-y-3">
              <CollapsibleTrigger>{filter.label}</CollapsibleTrigger>
              <CollapsibleContent>
                <div className="space-y-2">
                  {filter.items.map(({ id, label }) => (
                    <div className="flex gap-2" key={id}>
                      <Checkbox
                        type="submit"
                        id={id}
                        name={filter.prop.search}
                        value={id}
                        defaultChecked={filterProps[filter.prop.search as keyof FiltersProps] && typeof filterProps[filter.prop.search as keyof FiltersProps] !== "string" ? (filterProps[filter.prop.search as keyof FiltersProps] as string[]).some((e) => e === id) : filterProps[filter.prop.search as keyof FiltersProps] === id}
                      />
                      <Label htmlFor={id}>{label}</Label>
                    </div>
                  ))}
                </div>
              </CollapsibleContent>
            </Collapsible>
          ))}
        </form>
      </SheetContent>
    </Sheet>
  );
}
