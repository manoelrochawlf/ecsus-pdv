import express from 'express';
import { adicionarItemController, obterTodasPecasController } from '../controllers/pecasController';
const router = express.Router();

router.post('/adicionarItem', adicionarItemController);
router.get('/obterTodasPecas', obterTodasPecasController);

export default router;