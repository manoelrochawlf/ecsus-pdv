// src/controllers/vendaController.ts
import { Request, Response } from 'express';
import { criarCliente, obterTodosClientes } from '../services/clientesService';
export const criarClienteController = async (req: Request, res: Response) => {
  try {
    const dadosCliente = req.body;
    const novoCliente = await criarCliente(dadosCliente);
    res.status(201).json(novoCliente);
  } catch (error) {
    console.error('Erro ao criar cliente:', error);
    res.status(500).json({ mensagem: 'Erro interno do servidor' });
  }
};

export const obterTodosClientesController = async (req: Request, res: Response) => {
  try {
    const pecas = await obterTodosClientes();
    res.status(200).json(pecas);
  } catch (error) {
    console.error('Erro ao obter clientes:', error);
    res.status(500).json({ mensagem: 'Erro interno do servidor' });
  }
};

// Adicione mais controladores conforme necessário para outras operações
