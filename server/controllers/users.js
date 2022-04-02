const bcrypt = require('bcrypt');
const {
  findUser,
  createUser,
  findAlbums,
} = require('../models');

const getUser = (req, res) => {
  const login = req.body;
  let user;
  findUser(login, (userData) => {
    if (!userData || userData === 'not found') {
      res.status(400).send(); // find correct code
    } else {
      user = userData;
      bcrypt.compare(login.password, userData.password, (err, match) => {
        if (!match) {
          res.status(401).send(); // find unauth code
        } else {
          findAlbums(user.id, (albumData) => {
            user.albums = albumData;
            res.status(200).json(user);
          });
        }
      });
    }
  });
};

const postUser = (req, res) => {
  const user = req.body;
  bcrypt.hash(user.password, 10, (err, hash) => {
    user.password = hash;
    createUser(user, (data) => {
      if (data === 'duplicate email') {
        res.status(409).send();
      } else {
        res.status(200).json(data);
      }
    });
  });
};

module.exports = { getUser, postUser };
