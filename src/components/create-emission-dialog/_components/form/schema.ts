import { z } from "zod";

export const schema = z.object({
  informacoesBasicas: z.object({
    nomeEmissao: z.string(),
    tipoTitulo: z.enum(["CRI", "CRA", "Debêntures"], { required_error: "Tipo de título é obrigatório" }),
    dataEmissao: z.date({
      required_error: "Data de emissão é obrigatória",
    }),
    dataVencimento: z.date({
      required_error: "Data de venciamento é obrigatória",
    }),
    codigoISIN: z.string().optional()
  }),
  detalhesFinanceiros: z.object({
    valorNominal: z.coerce.number(),
    taxaRemuneracao: z.string(),
    formaPagamentoJuros: z.enum(["Mensal", "Semestral", "Anual"]),
    garantiasAssociadas: z.string().optional()
  }),
  informacoesEmissor: z.object({
    nomeEmissor: z.string(),
    cnpjEmissor: z.string().nonempty("É necessário informar o CNPJ do emissor"),
    dadosContatoResponsavel: z.object({
      nome: z.string().nonempty("É necessário informar o nome do responsável"),
      telefone: z.string(),
      email: z.string().email({message: "O e-mail informado não é válido"}).nonempty("É necessário informar o e-mail do responsável"),
    }),
    historicoFinanceiro: z.string().optional(),
    historicoCredito: z.string().optional()
  }),
  documentacaoNecessaria: z.object({
    prospectoEmissao: z.string().url("Deve ser uma URL válida"),
    relatoriosFinanceiros: z.string().url("Deve ser uma URL válida"),
    contratosGarantia: z.string().url("Deve ser uma URL válida")
  }),
  informacoesAdicionais: z.object({
    objetivoEmissao: z.string(),
    perfilInvestidores: z.string(),
    informacoesDistribuicao: z.string().optional()
  })
});
