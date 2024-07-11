export async function getComission(id: number) {
  const res = await fetch(`https://portal-prod-api-portfolio-bff.azurewebsites.net/v1/api/emissao/passivosoperacoes/detalhe?codigoIf=${id}`)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}