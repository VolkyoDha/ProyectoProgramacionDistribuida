const express = require('express');
const { createRole, getRoles, updateRole, deleteRole } = require('../controllers/roleController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', authMiddleware, createRole);
router.get('/', authMiddleware, getRoles);
router.put('/:id', authMiddleware, updateRole);
router.delete('/:id', authMiddleware, deleteRole);

module.exports = router;
