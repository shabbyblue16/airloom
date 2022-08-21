const { getUser, postUser } = require('./users');
const { postAlbum } = require('./albums');
const { getItems, postItem } = require('./items');
const { postPic } = require('./pics');

module.exports = {
  getUser,
  postUser,
  postAlbum,
  getItems,
  postItem,
  postPic,
};
