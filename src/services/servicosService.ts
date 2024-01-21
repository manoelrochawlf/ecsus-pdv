import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const criarVenda = async (dados: ServicosCreateInput) => {
  return prisma.venda.create({
    data: dados,
  });
};

export const obterTodasVendas = async () => {
  return prisma.venda.findMany();
};