const express = require('express');
const { recordAction, getActionMetrics } = require('../controllers/analyticsController');

const router = express.Router();

router.post('/', recordAction);
router.get('/metrics', getActionMetrics);

module.exports = router;
