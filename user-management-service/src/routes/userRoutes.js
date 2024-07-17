const express = require('express');
const { getUser, updateUser, deleteUser } = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/profile', authMiddleware, getUser);
router.put('/profile', authMiddleware, updateUser);
router.delete('/profile', authMiddleware, deleteUser);

module.exports = router;
