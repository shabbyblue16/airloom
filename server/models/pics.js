const { pgClient } = require('../db');

const findPics = (itemId, callback) => {
  const query = {
    name: 'find-item-pics',
    text: 'SELECT * FROM pics WHERE items_id = $1',
    values: [itemId],
  };
  pgClient
    .query(query)
    .then((data) => callback(data.rows))
    .catch((e) => {
      callback('pics not found');
    });
};

const createPic = (pic, callback) => {
  const query = {
    name: 'create-pic',
    text: 'INSERT INTO pics(url, items_id) VALUES($1, $2) RETURNING *',
    values: [pic.url, pic.itemId],
  };
  pgClient
    .query(query)
    .then((data) => callback(data.rows[0]))
    .catch((e) => {
      console.log(e.stack);
      callback('error saving pic');
    });
};

module.exports = {
  findPics,
  createPic,
};
