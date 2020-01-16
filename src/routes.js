const { Router } = require('express');
const DevController = require('./controllers/DevControllers');
const routes = Router();

routes.post('/devs', DevController.store)

routes.get('/devs', DevController.index)

module.exports = routes;