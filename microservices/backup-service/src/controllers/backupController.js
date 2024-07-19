const mongoose = require('mongoose');
const { uploadToS3 } = require('../utils/s3');
const { MongoClient } = require('mongodb');

const backupDatabase = async (req, res) => {
    const uri = process.env.MONGODB_URI;
    const dbName = process.env.DB_NAME;
    const bucketName = process.env.S3_BUCKET_NAME;

    try {
        const client = await MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        const db = client.db(dbName);

        const collections = await db.collections();
        const backupData = {};

        for (const collection of collections) {
            const data = await collection.find().toArray();
            backupData[collection.collectionName] = data;
        }

        const backupBuffer = Buffer.from(JSON.stringify(backupData));
        const s3Response = await uploadToS3(bucketName, `backup-${Date.now()}.json`, backupBuffer);

        res.status(201).json({ message: 'Backup successful', s3Response });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = { backupDatabase };
