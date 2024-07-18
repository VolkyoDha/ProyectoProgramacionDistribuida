const express = require('express');
const { getPreferences, updatePreferences } = require('../controllers/preferencesController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/', authMiddleware, getPreferences);
router.put('/', authMiddleware, updatePreferences);

module.exports = router;
