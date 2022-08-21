const aws = require('aws-sdk');
const fs = require('fs');
const {
  findItem,
  createPic,
} = require('../models');

const postPic = (req, res) => {
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
      const { itemId } = req.body;
      findItem(itemId, (itemData) => {
        const currentItem = itemData;
        if (data === 'error creating item') {
          res.status(400).send();
        } else {
          const pic = { url, itemId: itemData.id };
          createPic(pic, (picData) => {
            if (picData === 'error saving pic') {
              res.status(400).send();
            } else {
              currentItem.pics = [picData];
              res.status(200).json(currentItem);
            }
          });
        }
      });
    }
  });
};

module.exports = { postPic };
