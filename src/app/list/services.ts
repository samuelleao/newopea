export async function getEmissions(page = "1", search = "", ativos: string | string[] = "", ofertas: string | string[] = "") {

  const ativosConditional = ativos ? Array.isArray(ativos) ? ativos.map((e)=> `ativos%5B0%5D=${e}&`).join("") : `ativos%5B0%5D=${ativos}&` : ""
  const ofertasConditional = ofertas ? Array.isArray(ofertas) ? ofertas.map((e)=> `ofertas%5B0%5D=${e}&`).join("") : `ofertas%5B0%5D=${ofertas}&` : ""

  const res = await fetch(`https://portal-prod-api-portfolio-bff.azurewebsites.net/v1/api/emissao/passivosoperacoes?${ofertasConditional}${ativosConditional}nome%5B0%5D=${search}&pagina=${page}&tamanhoPagina=20`)

  if (!res) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}