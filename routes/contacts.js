const routes = require('express').Router();

const controller = require('../controller/contacts.js');

routes.get('/', controller.getAll);

routes.get('/:id', controller.getSingle);



module.exports = routes;

