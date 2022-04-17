const express = require('express');
const multer = require('multer');
const path = require('path');

const {
  getUser,
  postUser,
  postAlbum,
  postItem,
} = require('../controllers');

const router = express.Router();

router.post('/users/auth', getUser);
router.post('/users/create', postUser);
router.post('/albums/create', postAlbum);
router
  .route('/items/create')
  .post(
    multer({ dest: 'temp/', limits: { fieldSize: 8 * 1024 * 1024 } }).single('picture'),
    postItem,
  );

module.exports = router;
