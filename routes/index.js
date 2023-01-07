const express = require('express');

const routes = require('express').Router();


routes.use('/contacts', require('./contacts'));

module.exports = routes;
