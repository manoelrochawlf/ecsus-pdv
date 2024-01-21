import { PrismaClient } from '@prisma/client';
import { ServicosCreateInput } from '../interfaces/servicos';

const prisma = new PrismaClient();

export const criarVenda = async (dados: ServicosCreateInput) => {
  return prisma.venda.create({
    data: dados,
  });
};

export const obterTodasVendas = async () => {
  return prisma.venda.findMany();
};