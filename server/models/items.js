const { pgClient } = require('../db');

const findItems = (albumId, callback) => {
  const query = {
    name: 'find-album-items',
    text: 'SELECT * FROM items WHERE albums_id = $1',
    values: [albumId],
  };
  pgClient
    .query(query)
    .then((data) => callback(data.rows))
    .catch((e) => {
      callback('items not found');
    });
};

const createItem = (item, callback) => {
  const query = {
    name: 'create-item',
    text: 'INSERT INTO items(name, location, text, albums_id) VALUES($1, $2, $3, $4) RETURNING *',
    values: [item.name, item.location, item.text, item.albumId],
  };
  pgClient
    .query(query)
    .then((data) => callback(data.rows[0]))
    .catch((e) => {
      console.log(e.stack);
      callback('error creating item');
    });
};

module.exports = {
  findItems,
  createItem,
};
