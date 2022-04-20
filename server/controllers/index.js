const { getUser, postUser } = require('./users');
const { postAlbum } = require('./albums');
const { getItems, postItem } = require('./items');

module.exports = {
  getUser,
  postUser,
  postAlbum,
  getItems,
  postItem,
};
