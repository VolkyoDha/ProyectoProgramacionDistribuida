const express = require('express');
const { logAction, getAuditLogs } = require('../controllers/auditController');

const router = express.Router();

router.post('/', logAction);
router.get('/', getAuditLogs);

module.exports = router;
