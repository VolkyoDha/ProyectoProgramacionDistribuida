const express = require('express');
const { backupDatabase } = require('../controllers/backupController');

const router = express.Router();

router.post('/', backupDatabase);

module.exports = router;
