import PaginationComponent from "@/components/pagination"
import { getEmissions } from "./services"
import { Input } from "@/components/ui/input";
import { Filters } from "./_components/filters";
import { EmissionsType } from "./types";
import { EmissionsCard } from "./_components/emission-card";
import { HeaderEffect } from "./_components/header-effect";

export default async function Page({ searchParams }: { searchParams?: { page: string; search: string; ativos: string | string[], ofertas: string | string[] } }) {
  const { page, search, ativos: active, ofertas: offers } = searchParams ?? { page: "1", search: "", ativos: "", ofertas: "" };
  const comissions: EmissionsType = await getEmissions(page, search, active, offers)
  return (
    <div>
      <header className="py-10 md:py-20 relative overflow-hidden">
        <HeaderEffect />
        <div className="container max-w-xl text-center relative z-10">
          <h1 className="text-lg md:text-2xl font-semibold">Emissões</h1>
          <p className="text-muted-foreground text-sm md:text-base pb-4">Visualize e filtre as emissões e acesse seus detalhes</p>
          <div className="flex gap-2">
            <form action="/list/" method="get" className="w-full">
              <Input type="search" placeholder="Pesquisar por..." defaultValue={search} name="search" />
            </form>
            <Filters ativos={active} ofertas={offers} />
          </div>
        </div>
      </header>
      <div className="container py-8">
        {comissions.content.emissoes.items.length === 0 ? (
          <div className="w-max mx-auto text-center ">
            <h2 className="font-semibold text-2xl">Oops! 🙁</h2>
            <p className="text-center text-muted-foreground">
              Nenhuma emissão encontrada
            </p>
          </div>
        ) : (
          <>
            {search ? <h2 className="text-center font-medium text-xl pb-12">🔍 <span className="text-muted-foreground">Resultados para:</span> {search} </h2> : ""}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {comissions.content.emissoes.items.map((item) => (
                <EmissionsCard item={item} key={item.id} />
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
          </>
        )}
      </div>
    </div>
  )
}