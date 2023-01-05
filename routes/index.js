const routes = require('express').Router();

routes.get('/', (req, res) => {
  res.send('Nicolas Pariente Fros');
});

module.exports = routes;
