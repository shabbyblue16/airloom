const express = require('express');
const multer = require('multer');
const path = require('path');

const upload = multer({
  dest: 'temp/',
  // limit: { fieldSize: 8 * 1024 * 1024 },
});
const {
  getUser,
  postUser,
  postAlbum,
  getItems,
  postItem,
  postPic,
} = require('../controllers');

const router = express.Router();

router.post('/users/auth', getUser);
router.post('/users/create', postUser);
router.post('/albums/create', postAlbum);
router.get('/items/get/:albumId?', getItems);
router
  .post(
    '/items/create',
    upload.array('pictures'),
    postItem,
  );
router
  .post(
    '/pics/create',
    upload.array('pictures'),
    postPic,
  );

module.exports = router;
