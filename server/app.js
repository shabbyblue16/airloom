/* eslint-disable no-console */
const express = require('express');
const { pgClient } = require('./db');

const app = express();
app.use(express.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept',
  );
  res.header('Access-Control-Allow-Methods', 'POST, PUT, GET, OPTIONS');
  next();
});

pgClient.connect()
  .then(async () => {
    console.log('Connected to database');
    app.listen(5000, () => {
      console.log('Listening on port 5000');
    });
  })
  .catch((err) => {
    console.log('Failed to connect: ', err);
  });
