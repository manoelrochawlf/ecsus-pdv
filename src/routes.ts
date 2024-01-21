// src/routes.ts
import express from 'express';
import servicosRouter from './routes/servicosRoutes';
import clientesRouter from './routes/servicosRoutes';
import pecasRouter from './routes/pecasRoutes';
import caixaRouter from './routes/caixaRoutes';
// Importe outras rotas conforme necessário

const router = express.Router();

router.use('/servicos', servicosRouter);
router.use('/clientes', clientesRouter);
router.use('/pecas', pecasRouter);
router.use('/caixa', caixaRouter);
// Use outras rotas conforme necessário

export default router;
