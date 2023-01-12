const routes = require('express').Router();

const controller = require('../controller/contacts.js');

routes.get('/', controller.getAll);

routes.get('/:id', controller.getSingle);

routes.post('/', controller.createSingle);

routes.put('/:id', controller.updateSingle);

routes.delete('/:id', controller.deleteSingle);


module.exports = routes;

