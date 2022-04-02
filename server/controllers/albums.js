const { createAlbum } = require('../models');

const postAlbum = (req, res) => {
  const album = req.body;
  createAlbum(album, (data) => {
    if (data === 'error creating album') {
      res.status(400).send();
    } else {
      res.status(200).json(data);
    }
  });
};

module.exports = { postAlbum };
