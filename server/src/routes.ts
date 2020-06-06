import express from 'express';

import PointsController from './controllers/pointsController';
import ItemsController from './controllers/itemsController';

const routes = express.Router() 
const pointsController = new PointsController;
const itemsController = new ItemsController;

//Lista todos os items 
routes.get('/items', itemsController.index);

//Cria novo ponto de coleta
routes.post('/points', pointsController.create);

//Busca um ponto de coleta específico
routes.get('/points/:id', pointsController.show);

//Busca por pontos em uma uf/cidade específica
routes.get('/points', pointsController.index);


export default routes;