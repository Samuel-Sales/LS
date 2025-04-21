import express from 'express';
import produtos from './produtosRoutes.js';

const routes = (app) => {
    app.route('/').get((req, res) => res.status(200).send('Bem vindo a API'))
    app.use(produtos);
};

export default routes;