import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const criarCliente = async (dados: ClientesCreateInput) => {
  return prisma.cliente.create({
    data: dados,
  });
};

export const obterTodosClientes = async () => {
  return prisma.cliente.findMany();
};
