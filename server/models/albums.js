const { pgClient } = require('../db');

const findAlbums = (userId, callback) => {
  const query = {
    name: 'find-user-albums',
    text: 'SELECT * FROM albums WHERE users_id = $1',
    values: [userId],
  };
  pgClient
    .query(query)
    .then((data) => callback(data.rows))
    .catch((e) => {
      callback('albums not found');
    });
};

const createAlbum = (album, callback) => {
  const query = {
    name: 'create-album',
    text: 'INSERT INTO albums(text, users_id, cover_pic) VALUES($1, $2, $3) RETURNING *',
    values: [album.text, album.userId, album.coverPic],
  };
  pgClient
    .query(query)
    .then((data) => callback(data.rows[0]))
    .catch((e) => {
      // console.log(e.stack);
      callback('error creating album');
    });
};

module.exports = {
  findAlbums,
  createAlbum,
};
