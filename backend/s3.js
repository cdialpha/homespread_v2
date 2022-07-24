const aws = require("aws-sdk");
const dotenv = require("dotenv");
const crypto = require("crypto");
const region = "";
const bucketName = "";
const accessKeyId = process.env.AWS_S3_ACCESS_KEY_ID;
const secretAccessKey = process.env.AWS_S3_SECRET_ACCESS_KEY;

const s3 = new aws.S3({
  region,
  accessKeyId,
  secretAccessKey,
  signatureVersion: "4",
});

const generateUploadURL = async () => {
  const rawBytes = await crypto.randomBytes(16);
  const imageName = rawBytes.toString("hex");
  const params = {
    Bucket: bucketName,
    Key: imageName,
    Expires: 60,
  };
  const uploadURL = await s3.getSignedURLPromise("putObject", params);
  return uploadURL;
};

module.exports = generateUploadURL;
