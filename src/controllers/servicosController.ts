// src/controllers/vendaController.ts
import { Request, Response } from 'express';
import { criarVenda, obterTodasVendas } from '../services/servicosService';

export const criarVendaController = async (req: Request, res: Response) => {
  try {
    const dadosVenda = req.body;
    const novaVenda = await criarVenda(dadosVenda);
    res.status(201).json(novaVenda);
  } catch (error) {
    console.error('Erro ao criar venda:', error);
    res.status(500).json({ mensagem: 'Erro interno do servidor' });
  }
};

export const obterTodasVendasController = async (req: Request, res: Response) => {
  try {
    const vendas = await obterTodasVendas();
    res.status(200).json(vendas);
  } catch (error) {
    console.error('Erro ao obter vendas:', error);
    res.status(500).json({ mensagem: 'Erro interno do servidor' });
  }
};

// Adicione mais controladores conforme necessário para outras operações
