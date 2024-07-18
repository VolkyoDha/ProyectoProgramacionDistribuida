const express = require('express');
const { createFeedback, getFeedbacks } = require('../controllers/feedbackController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', authMiddleware, createFeedback);
router.get('/', authMiddleware, getFeedbacks);

module.exports = router;
