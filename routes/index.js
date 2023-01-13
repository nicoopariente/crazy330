
const routes = require('express').Router();


routes.use('/contacts', require('./contacts'));

routes.get('/', (req, res) => {
  res.send('Nicolas Pariente Fros');
});

routes.use('/', require('./swagger'));
module.exports = routes;
