const dotenv = require('dotenv').config({ path: './.env' });
const express = require('express');
const app = express();
const port = process.env.PORT;
require('./database/connect');

// middleware
const middleware = (req, res, next) => {
  console.log('hello my middle ware');
  next();
};

app.get('/', (req, res) => {
  return res.status(200).json({
    status: true,
    message: 'Hello world',
  });
});

app.get('/about', middleware, (req, res) => {
  res.send('Hello about the world....');
});

app.listen(port, () => {
  console.log('start server:' + port);
});
