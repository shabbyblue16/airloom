const express = require('express');
const multer = require('multer');
const path = require('path');

const {
  getUser,
  postUser,
  postAlbum,
} = require('../controllers');

const router = express.Router();

router.post('/users/auth', getUser);
router.post('/users/create', postUser);
router.post('/albums/create', postAlbum);

module.exports = router;
