const AWS = require('aws-sdk');

const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION
});

const uploadToS3 = (bucketName, key, body) => {
    const params = {
        Bucket: bucketName,
        Key: key,
        Body: body
    };

    return s3.upload(params).promise();
};

module.exports = { uploadToS3 };
