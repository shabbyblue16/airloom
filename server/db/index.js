const pg = require('pg');
require('dotenv').config();

const pgClient = new pg.Client(process.env.PG_STRING);

module.exports = {
  pgClient,
};
