const { pgClient } = require('../db');

const findUser = (user, callback) => {
  const query = {
    name: 'fetch-user',
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
};
