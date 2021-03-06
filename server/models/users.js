const { pgClient } = require('../db');

const findUser = (user, callback) => {
  const query = {
    name: 'check-user',
    text: 'SELECT * FROM users WHERE email = $1',
    values: [user.email],
  };
  pgClient
    .query(query)
    .then((data) => callback(data.rows[0]))
    .catch((e) => {
      callback('not found');
    });
};

const createUser = (user, callback) => {
  const query = {
    name: 'create-user',
    text: 'INSERT INTO users(email, password, firstname, lastname) VALUES($1, $2, $3, $4) RETURNING *',
    values: [user.email, user.password, user.firstname, user.lastname],
  };
  pgClient
    .query(query)
    .then((data) => callback(data.rows[0]))
    .catch((e) => {
      // console.log(e.stack);
      callback('duplicate email');
    });
};

module.exports = {
  findUser,
  createUser,
};
