const express = require('express');
const { getUserStatistics, getServiceStatus } = require('../controllers/reportController');
const { authMiddleware, adminMiddleware } = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/user-statistics', authMiddleware, adminMiddleware, getUserStatistics);
router.get('/service-status', authMiddleware, adminMiddleware, getServiceStatus);

module.exports = router;
