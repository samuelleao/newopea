export async function getComissions(page: number) {
  const res = await fetch(`https://portal-prod-api-portfolio-bff.azurewebsites.net/v1/api/emissao/passivosoperacoes?pagina=${page}&tamanhoPagina=20`)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}