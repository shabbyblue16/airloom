const bcrypt = require('bcrypt');
const { find, create } = require('../models');

const getUser = (req, res) => {
  const user = req.body;
  find(user, (data) => {
    if (!data || data === 'not found') {
      res.status(400).send(); // find correct code
    } else {
      bcrypt.compare(user.password, data.password, (err, match) => {
        if (!match) {
          res.status(401).send(); // find unauth code
        } else {
          res.status(200).json(data);
        }
      });
    }
  });
};

const postUser = (req, res) => {
  const user = req.body;
  bcrypt.hash(user.password, 10, (err, hash) => {
    user.password = hash;
    create(user, (data) => {
      if (data === 'duplicate email') {
        res.status(409).send();
      } else {
        res.status(200).json(data);
      }
    });
  });
};

module.exports = { getUser, postUser };
