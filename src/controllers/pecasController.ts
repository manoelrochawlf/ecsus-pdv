// src/controllers/vendaController.ts
import { Request, Response } from 'express';
import { adicionarItemEstoque, obterTodosItensEstoque } from '../services/pecasService';
export const adicionarItemController = async (req: Request, res: Response) => {
  try {
    const dadosEstoque = req.body;
    const novaVenda = await adicionarItemEstoque(dadosEstoque);
    res.status(201).json(novaVenda);
  } catch (error) {
    console.error('Erro ao adicionar item:', error);
    res.status(500).json({ mensagem: 'Erro interno do servidor' });
  }
};

export const obterTodasPecasController = async (req: Request, res: Response) => {
  try {
    const pecas = await obterTodosItensEstoque();
    res.status(200).json(pecas);
  } catch (error) {
    console.error('Erro ao obter itens:', error);
    res.status(500).json({ mensagem: 'Erro interno do servidor' });
  }
};

// Adicione mais controladores conforme necessário para outras operações
