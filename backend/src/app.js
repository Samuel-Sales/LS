import express from "express";
import conectaNaDatabase from "./config/dbConnect.js";
import routes from "./routes/index.js";
import cors from 'cors';

const conexao = await conectaNaDatabase();

conexao.on('error', (erro) => {
  console.error('Erro de conexão', erro);
});

conexao.once('open', () => {
  console.log('Conexão com o banco feita com sucesso');
})

const app = express();

app.use(cors({
  origin: ['https://ls-pink.vercel.app', 'http://localhost:5173'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use(express.json());


routes(app);


export default app;