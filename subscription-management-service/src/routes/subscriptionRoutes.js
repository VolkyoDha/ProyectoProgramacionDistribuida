const express = require('express');
const { createSubscription, getSubscriptions, cancelSubscription } = require('../controllers/subscriptionController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', authMiddleware, createSubscription);
router.get('/', authMiddleware, getSubscriptions);
router.put('/:id', authMiddleware, cancelSubscription);

module.exports = router;
