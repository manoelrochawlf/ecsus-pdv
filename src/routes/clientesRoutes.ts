import express from 'express';
import { criarClienteController, obterTodosClientesController } from '../controllers/clientesController';
const router = express.Router();

router.post('/adicionarCliente', criarClienteController);
router.get('/obterTodosClientes', obterTodosClientesController);

export default router;