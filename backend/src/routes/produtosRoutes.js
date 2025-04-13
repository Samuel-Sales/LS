import express from 'express';
import ProdutoController from '../controllers/produtosController.js';

const routes = express.Router();

routes.get('/produtos', ProdutoController.listarProdutos);
routes.get('/produtos/:id', ProdutoController.listaProdutosPorId);
routes.post('/produtos', ProdutoController.cadastrarProduto);
routes.put('/produtos/:id', ProdutoController.atualizarProduto);
routes.delete('/produtos/:id', ProdutoController.excluirProduto);

export default routes;