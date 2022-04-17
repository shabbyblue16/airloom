/* eslint-disable no-console */
const express = require('express');
const { dbConnect } = require('./db');
const router = require('./routes');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept',
  );
  res.header('Access-Control-Allow-Methods', 'POST, PUT, GET, OPTIONS');
  next();
});

app.use(router);

dbConnect()
  .then(async () => {
    app.listen(process.env.PORT || 3000, () => {
      console.log(`Listening on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log('Failed to connect: ', err);
  });
