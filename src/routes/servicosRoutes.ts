import express from 'express';
import { criarVendaController, obterTodasVendasController } from '../controllers/servicosController';

const router = express.Router();

router.post('/criar', criarVendaController);
router.get('/obterTodasVendas', obterTodasVendasController);

export default router;