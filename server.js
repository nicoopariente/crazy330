const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongodb = require('./db/connect');
const cors = require('cors');

const port = process.env.PORT || 3000;

app.use(bodyParser.json()).use(cors({
  origin: ['http://localhost:3000', 'https://crazy341.onrender.com/','https://cse341-contacts-frontend.netlify.app/']
}))
.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
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