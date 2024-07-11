interface EmissionsType {
  content: {
    emissoes: Emission;
    filtros: Filtros;
  }
}

interface Filtros {
  selos: Selo[];
}

interface Selo {
  id: number;
  sigla: string;
  descricao: string;
  nomeArquivo: string;
  extensaoArquivo?: any;
  arquivo?: any;
  url?: any;
}

interface Emission {
  lastPage: number;
  totalCount: number;
  hasItems: boolean;
  pageSize: number;
  pageIndex: number;
  items: Item[];
}

interface Item {
  id: number;
  idOperacao: number;
  codigoOpea: string;
  nomeDevedor: string;
  indexador: string;
  precoUnitario?: any;
  dataVencimento: string;
  status?: any;
  statusPassivoOperacao: StatusPassivoOperacao;
  garantiaReal?: any;
  fundos?: any;
  rating?: any;
  servicer: any[];
  masterService: string;
  concentracao: string;
  oferta: string;
  descricaoSegmento?: any;
  codigoIf: string;
  tipoIndexador: string;
  naturezaOperacao: string;
  isin: string;
  serie: number;
  emissao: number;
  tipoPagamento: StatusPassivoOperacao;
  taxaPosFixada?: StatusPassivoOperacao;
  percentualFlutuante?: number;
  taxaJuros: number;
  agenciaRating?: any;
  simboloMoeda: string;
  selos?: any;
  contaMestre: StatusPassivoOperacao;
  fundo?: any;
  classe?: any;
  subClasse: SubClasse;
  emissaoCota?: any;
  tipoAnbima: SubClasse;
  favorito: boolean;
  quantidadeFavoritada?: any;
}

interface SubClasse {
  key: number;
  value?: any;
  raw: string;
}

interface StatusPassivoOperacao {
  key: number;
  value: string;
  raw: string;
}