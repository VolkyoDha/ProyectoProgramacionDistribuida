const express = require('express');
const { checkHealth, updateHealth } = require('../controllers/healthCheckController');

const router = express.Router();

router.get('/', checkHealth);
router.post('/', updateHealth);

module.exports = router;
