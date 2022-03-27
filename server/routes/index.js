const express = require('express');
const multer = require('multer');
const path = require('path');

const {
  postAlbum,
} = require('../controllers');

const router = express.Router();

router.post('/albums/create', postAlbum);

module.exports = router;
