const routes = require('express').Router();

routes.get('/', (req, res) => {
  res.send('Nicolas Pariente');
});

module.exports = routes;
