const express = require('express');
const { exportData } = require('../controllers/exportController');

const router = express.Router();

router.get('/csv', exportData);

module.exports = router;
