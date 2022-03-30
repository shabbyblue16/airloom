const { findUser } = require('../models');

const getUser = (req, res) => {
  console.log(req);
};

const postUser = (req, res) => {
  const user = req.body;
  findUser(user, (data) => {
    if (data === 'duplicate email') {
      res.status(409).send('Email already exists');
    } else {
      res.status(200).json(data);
    }
  });
};

module.exports = { getUser, postUser };
