// import { createItem } from '../models';
const aws = require('aws-sdk');
const fs = require('fs');

const postItem = (req, res) => {
  aws.config.setPromisesDependency();
  aws.config.update({
    accessKeyId: process.env.ACCESS_KEY_ID,
    secretAccessKey: process.env.SECRET_ACCESS_KEY,
    region: process.env.REGION,
  });

  const s3 = new aws.S3();
  const params = {
    ACL: 'public-read',
    Bucket: process.env.BUCKET_NAME,
    Body: fs.createReadStream(req.file.path),
    Key: `itemPicture/${req.file.originalname}`,
  };

  s3.upload(params, (err, data) => {
    if (err) {
      console.log('s3 upload error: ', err);
    }

    if (data) {
      fs.unlinkSync(req.file.path); // Empty temp folder
      const url = data.Location;
      // create new item w/ albumId and new pic w/ itemId in database
      // const item = req.body;
      // createItem(item, (data) => {
      //   const newItem = data;
      //   newItem.pics = [url];
      //   if (data === 'error creating item') {
      //     res.status(400).send();
      //   } else {
      //     const pic = { url, itemId: data.id };
      //     createPic(pic, (picData) => {
      //       if (picData === 'error creating pic') {
      //         res.status(400).send();
      //       } else {
      //       res.status(200).json(newItem);
      //       }
      //     })
      //   }
      // });
    }
  });
};

module.exports = { postItem };
