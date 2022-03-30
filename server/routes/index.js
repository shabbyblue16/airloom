const express = require('express');
const multer = require('multer');
const path = require('path');

const {
  getUser,
  postUser,
  postAlbum,
} = require('../controllers');

const router = express.Router();

router.get('/users', getUser);
router.post('/users', postUser);
router.post('/albums', postAlbum);

module.exports = router;
