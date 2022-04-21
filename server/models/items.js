const { pgClient } = require('../db');
const { findPics } = require('./pics');

const findItems = (albumId, callback) => {
  const query = {
    name: 'find-album-items',
    text: 'SELECT i.id, i.name, i.location, i.text, (select array(select p.url FROM pics p WHERE p.items_id = i.id)) as urls FROM items i WHERE albums_id = $1',
    values: [albumId],
  };
  pgClient
    .query(query)
    .then((data) => callback(data.rows))
    .catch((e) => {
      console.log(e);
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
