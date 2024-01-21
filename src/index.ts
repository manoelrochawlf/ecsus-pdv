// src/server.ts
import 'dotenv/config';
import express from 'express';
import router from './routes';
import { Pool } from 'pg';

const app = express();
const port = process.env.PORT || 3000;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

app.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT $1::text as message', ['Hello World']);
    res.send(result.rows[0].message);
  } catch (error) {
    console.error('Erro na consulta ao banco de dados:', error);
    res.status(500).send('Erro interno do servidor');
  }
});

app.use('/api', router); // Usa o router principal

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
