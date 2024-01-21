import express from 'express';
import { registrarTransacaoController,obterTodasTransacoesController } from '../controllers/caixaController';
const router = express.Router();

router.post('/registrarTransacao', registrarTransacaoController);
router.get('/obterTodasTransacoes', obterTodasTransacoesController);

export default router;