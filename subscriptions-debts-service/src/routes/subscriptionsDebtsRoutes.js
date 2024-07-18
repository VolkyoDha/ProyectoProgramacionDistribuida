const express = require('express');
const { getSubscriptionsDebts, createSubscriptionDebt, deleteSubscriptionDebt } = require('../controllers/subscriptionsDebtsController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/', authMiddleware, getSubscriptionsDebts);
router.post('/', authMiddleware, createSubscriptionDebt);
router.delete('/:id', authMiddleware, deleteSubscriptionDebt);

module.exports = router;
