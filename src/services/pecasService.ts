import { PrismaClient } from '@prisma/client';
import { PecasCreateInput } from '../interfaces/pecas';

const prisma = new PrismaClient();

export const adicionarItemEstoque = async (dados: PecasCreateInput) => {
  return prisma.estoque.create({
    data: dados,
  });
};

export const obterTodosItensEstoque = async () => {
  return prisma.estoque.findMany();
};