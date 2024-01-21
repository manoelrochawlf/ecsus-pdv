export interface TransacaoFinanceiraCreateInput {
    transacaoId?: number,
    tipo: string,
    valor: number,
    dataTransacao: Date,
    descricao: string
};
