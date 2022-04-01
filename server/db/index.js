require('dotenv').config();
const { Pool, Client } = require('pg');

const connectionString = process.env.PG_STRING;

const pgClient = new Client({
  connectionString,
});
const pgPool = new Pool({
  connectionString,
});

const dbConnect = () => pgClient.connect()
  .then(async () => {
    console.log('Connected to database');
  })
  .catch((err) => {
    console.log('Connection to database failed');
    process.exit(1);
  });

module.exports = {
  pgClient,
  pgPool,
  dbConnect,
};
