const { getUser, postUser } = require('./users');
const { postAlbum } = require('./albums');
const { postItem } = require('./items');

module.exports = {
  getUser,
  postUser,
  postAlbum,
  postItem,
};
