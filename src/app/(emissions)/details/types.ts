export interface Emission {
  content: Content;
  messages: Messages;
}

interface Messages {
  errors: any[];
  warnings: any[];
  infos: any[];
  successes: any[];
  hasError: boolean;
}

interface Content {
  id: number;
  permissaoDivulgacaoPortal: PermissaoDivulgacaoPortal;
  contaMestre: PermissaoDivulgacaoPortal;
  gestorOperacao?: any;
  codigoPatrimonio: string;
  codigoBolsa: string;
  codigoCetipBbb: string;
  codigoIsin: string;
  apelidoOperacao: string;
  serie: number;
  emissao: string;
  tipoOferta: PermissaoDivulgacaoPortal;
  regimeFiduciario: boolean;
  formaCalculo: PermissaoDivulgacaoPortal;
  concentracao: PermissaoDivulgacaoPortal;
  dataEmissaoSerie: string;
  dataVencimentoSerie: string;
  dataPrimeiraIntegralizacao: string;
  quantidadeEmitida: number;
  quantidadeIntegralizada: number;
  precoUnitario: number;
  volumeEmitido?: any;
  valorGlobalSerie?: any;
  perspectivaRating: PerspectivaRating;
  dataAtribuicaoRationg?: any;
  periodicidadeRenovacaoRating: PerspectivaRating;
  existenciaPrePagamento: boolean;
  possibilidadePrePagamento: PermissaoDivulgacaoPortal;
  formaPrePagamento: PermissaoDivulgacaoPortal;
  existenciaPremioPrePagamento?: any;
  opcaoResgateSecuritizadora: boolean;
  dataLockup: string;
  clausulaContrato: string;
  linkEstruturaOperacao?: any;
  descricaoEstrutura: string;
  agencia?: any;
  classeOperacao: ClasseOperacao;
  emissor: Emissor;
  naturezaOperacao: ClasseOperacao;
  pagamentoPassivo: PagamentoPassivo;
  titulo: Emissor;
  contaArrecadadoraList: ContaArrecadadoraList[];
  gestorFiduciario: GestorFiduciario;
  coordenadorLider: GestorFiduciario;
  agenteFiduciario: GestorFiduciario;
  assessorLegal: GestorFiduciario;
  camaraLiquidacao: GestorFiduciario;
  administrador?: any;
  administradorLink?: any;
  metaRentabilidade?: any;
  statusPassivoOperacao: PermissaoDivulgacaoPortal;
  statusAprovacao: PermissaoDivulgacaoPortal;
  operacao: Operacao;
  premioPrePagamentoList: any[];
  descricaoSegmentoOperacao: string;
  remuneracao: string;
  idCedoc: string;
  selos: Selo[];
  favorito: boolean;
  divulgacao: PermissaoDivulgacaoPortal;
}

interface Selo {
  sigla: string;
  descricao: string;
  url: string;
}

interface Operacao {
  id: number;
  CodigoOpea: string;
  dataInicioOperacao?: any;
  status: PermissaoDivulgacaoPortal;
  subClasse?: any;
}

interface GestorFiduciario {
  idTipoServicoPrestado: number;
  idEmpresaPrestadora: number;
  cnpj: string;
  nomeSimplificado: string;
  razaoSocial: string;
}

interface ContaArrecadadoraList {
  id: number;
  idPassivoOperacao: number;
  agencia: string;
  contaCorrente: string;
  digito: string;
  banco: Banco;
  tipoContaArrecadadora: ClasseOperacao;
}

interface Banco {
  id: number;
  nome: string;
}

interface PagamentoPassivo {
  id: number;
  idPeriodicidadeFrequenciaAmortizacao: number;
  idPeriodicidadeFrequenciaJuros: number;
  tipoPagamentoPassivo: PermissaoDivulgacaoPortal;
  basePagamentoRemuneracao?: any;
  inicioJurosRemuneracao: string;
  carenciaJuros: boolean;
  dataCarencia?: any;
  dataBasePrimeiroAniversario: string;
  somenteVariacaoPositiva?: any;
  periodicidadeFrequenciaAmortizacao: ClasseOperacao;
  periodicidadeFrequenciaJuros: ClasseOperacao;
  taxaJurosPagamentoList: TaxaJurosPagamentoList[];
  curvaPagamentoPassivoList: CurvaPagamentoPassivoList[];
  integralizacaoList: IntegralizacaoList[];
}

interface IntegralizacaoList {
  id: number;
  dataIntegralizacao: string;
  quantidadeIntegralizada: number;
  taxaVenda: number;
  precoUnitario: number;
}

interface CurvaPagamentoPassivoList {
  id: number;
  dataEvento: string;
  dataPagamento: string;
  pagamentoJuros: PermissaoDivulgacaoPortal;
  percentualPagamento: number;
  pagamentoAmortizacao: PermissaoDivulgacaoPortal;
  percentualPagamentoAmortizacao: number;
  premio: number;
  amex: number;
  statusPagamentoCurva: PermissaoDivulgacaoPortal;
}

interface TaxaJurosPagamentoList {
  id: number;
  idPeriodicidadeCorrecaoMonetaria: number;
  taxaJuros: number;
  dataInicioTaxaJuros: string;
  percentualFlutuante?: any;
  diaReferenciaTR?: any;
  defasagemTaxaIndexador: number;
  indexadorCorrecaoMonetaria: PermissaoDivulgacaoPortal;
  taxaPosFixada?: any;
  baseCalculoTaxaJuros: PermissaoDivulgacaoPortal;
  baseCalculoTaxaPosFixada?: any;
  baseCalculoIndexador: PermissaoDivulgacaoPortal;
}

interface Emissor {
  id: number;
  sigla: string;
  descricao: string;
}

interface ClasseOperacao {
  id: number;
  descricao: string;
}

interface PerspectivaRating {
  key: number;
  value?: any;
  raw: string;
}

interface PermissaoDivulgacaoPortal {
  key: number;
  value: string;
  raw: string;
}

export interface EmissionUnityPrice {
  content: Content;
  messages: Messages;
}

interface Messages {
  errors: any[];
  warnings: any[];
  infos: any[];
  successes: any[];
  hasError: boolean;
}

interface Content {
  lastPage: number;
  totalCount: number;
  hasItems: boolean;
  pageSize: number;
  pageIndex: number;
  items: Item[];
}

interface Item {
  data: string;
  isin: string;
  codigoOpea: string;
  codCetip: string;
  id: string;
  emissor: string;
  emissao: number;
  serie: number;
  taxa: string;
  operacao: string;
  pu: number;
  codigoIf: string;
  puAtualizado: number;
  etapaPagamentoPrecificacao?: any;
  moeda: Moeda;
  quantidadeIntegralizada: number;
  quantidadeEmitida: number;
}

interface Moeda {
  id: number;
  descricao: string;
  simbolo: string;
  codigoIso?: any;
}

export interface EmissionDocuments {
  parent: Parent;
  children: Child[];
  itens: any[];
  totalCount: number;
}

interface Child {
  id: string;
  parentId: string;
  parentName: string;
  companyId: number;
  categoryId: number;
  categoryName: string;
  categoryConditionKey: string;
  categoryConditionDescription: string;
  sectionId: number;
  sectionName: string;
  name: string;
  url: string;
  type: string;
  contentType: string;
  length: number;
  ownerId: string;
  ownerName: string;
  isConfidential: boolean;
  createdOn: string;
  updatedOn: string;
  conditions?: any;
  description?: any;
}

interface Parent {
  id: string;
  parentId: string;
  parentName: string;
  companyId: number;
  categoryId: number;
  categoryName: string;
  categoryConditionKey?: any;
  categoryConditionDescription?: any;
  sectionId: number;
  sectionName: string;
  name: string;
  url?: any;
  type: string;
  contentType?: any;
  length: number;
  ownerId?: any;
  ownerName?: any;
  isConfidential: boolean;
  createdOn: string;
  updatedOn: string;
  conditions?: any;
  description?: any;
}


export interface EmissionGraph {
  content: EmissionGraphContent[];
  messages: Messages;
}

interface Messages {
  errors: any[];
  warnings: any[];
  infos: any[];
  successes: any[];
  hasError: boolean;
}

export interface EmissionGraphContent {
  dataPagamento: string;
  amortizacao: number;
  jurosPago: number;
  saldoDevedor: number;
  amortizacaoExtraordinaria: number;
  premio: number;
  jurosRemuneracao: number;
  statusEvento: string;
  moeda: Moeda;
}

interface Moeda {
  id: number;
  descricao: string;
  simbolo: string;
  codigoIso?: any;
}