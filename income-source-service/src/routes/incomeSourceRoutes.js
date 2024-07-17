const express = require('express');
const { getIncomeSources, createIncomeSource, deleteIncomeSource } = require('../controllers/incomeSourceController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/', authMiddleware, getIncomeSources);
router.post('/', authMiddleware, createIncomeSource);
router.delete('/:id', authMiddleware, deleteIncomeSource);

module.exports = router;
