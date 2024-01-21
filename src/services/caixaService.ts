import { PrismaClient } from '@prisma/client';
import { TransacaoFinanceiraCreateInput } from '../interfaces/caixa';

const prisma = new PrismaClient();

export const registrarTransacaoFinanceira = async (dados: TransacaoFinanceiraCreateInput) => {
  return prisma.transacaoFinanceira.create({
    data: dados,
  });
};

export const obterTodasTransacoesFinanceiras = async () => {
  return prisma.transacaoFinanceira.findMany();
};
