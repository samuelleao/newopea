export async function getEmission(id: number) {
  const res = await fetch(`${process.env.BASE_API}/emissao/passivosoperacoes/detalhe?codigoIf=${id}`)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export async function getEmissionUnitPrice(cri: string) {
  const res = await fetch(`${process.env.BASE_API}/precounitario/precosunitariospaginado?EhUltimosTresRegistros=true&filtros=${cri}`)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export async function getEmissionDocuments(idCedoc: string) {
  const res = await fetch(`${process.env.BASE_API}//cedoc/files?directoryId=${idCedoc}&isRecursive=true`)
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export async function getEmissionGraphData(cri: string) {
  const res = await fetch(`
  https://portal-prod-api-portfolio-bff.azurewebsites.net/v1/api/emissao/precificacoes/detalhe/fluxofinanceiro/grafico?codigoOpea=${cri}`)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

