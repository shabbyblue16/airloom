const aws = require('aws-sdk');
const fs = require('fs');
const {
  findItems,
  createItem,
  findPics,
  createPic,
} = require('../models');

const getItems = (req, res) => {
  const { albumId } = req.query;
  console.log(albumId, 'be id');
  findItems(albumId, (itemData) => {
    if (itemData === 'items not found') {
      res.status(400).send();
    } else {
      res.status(200).json(itemData);
    }
  });
};

const postItem = (req, res) => {
  aws.config.setPromisesDependency();
  aws.config.update({
    accessKeyId: process.env.ACCESS_KEY_ID,
    secretAccessKey: process.env.SECRET_ACCESS_KEY,
    region: process.env.REGION,
  });

  const s3 = new aws.S3();
  const params = {
    // ACL: 'public-read',
    Bucket: process.env.BUCKET_NAME,
    Body: fs.createReadStream(req.files[0].path),
    Key: `item/${req.files[0].originalname}`,
  };

  s3.upload(params, (err, data) => {
    if (err) {
      console.log('s3 upload error: ', err);
    }

    if (data) {
      fs.unlinkSync(req.files[0].path); // Empty temp folder
      const url = data.Location;
      const item = req.body;
      createItem(item, (itemData) => {
        const newItem = itemData;
        if (data === 'error creating item') {
          res.status(400).send();
        } else {
          const pic = { url, itemId: itemData.id };
          createPic(pic, (picData) => {
            if (picData === 'error saving pic') {
              res.status(400).send();
            } else {
              newItem.pics = [picData];
              res.status(200).json(newItem);
            }
          });
        }
      });
    }
  });
};

module.exports = { getItems, postItem };
