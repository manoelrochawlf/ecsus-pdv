// src/controllers/vendaController.ts
import { Request, Response } from 'express';
import { registrarTransacaoFinanceira, obterTodasTransacoesFinanceiras } from '../services/caixaService';
export const registrarTransacaoController = async (req: Request, res: Response) => {
  try {
    const dadosTransacao = req.body;
    const novoCliente = await registrarTransacaoFinanceira(dadosTransacao);
    res.status(201).json(novoCliente);
  } catch (error) {
    console.error('Erro ao registrar transação:', error);
    res.status(500).json({ mensagem: 'Erro interno do servidor' });
  }
};

export const obterTodasTransacoesController = async (req: Request, res: Response) => {
  try {
    const pecas = await obterTodasTransacoesFinanceiras();
    res.status(200).json(pecas);
  } catch (error) {
    console.error('Erro ao obter transações:', error);
    res.status(500).json({ mensagem: 'Erro interno do servidor' });
  }
};

// Adicione mais controladores conforme necessário para outras operações
