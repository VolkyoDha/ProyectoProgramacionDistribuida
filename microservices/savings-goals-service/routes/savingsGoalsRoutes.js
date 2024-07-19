const express = require('express');
const { getSavingsGoals, createSavingsGoal, deleteSavingsGoal } = require('../controllers/savingsGoalsController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/', authMiddleware, getSavingsGoals);
router.post('/', authMiddleware, createSavingsGoal);
router.delete('/:id', authMiddleware, deleteSavingsGoal);

module.exports = router;
