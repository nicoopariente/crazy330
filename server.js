const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongodb = require('./db/connect');

const port = process.env.PORT || 3000;

app.use(bodyParser.json())
.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Methods', 'POST,GET,PUT,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Accept'); 
  next();
})
.use('/', require('./routes'));


mongodb.initDb((err) => {
    if (err) {
      console.log(err);
    } else {
      app.listen(port);
      console.log(`Connected to DB and listening on ${port}`);
    }
  });