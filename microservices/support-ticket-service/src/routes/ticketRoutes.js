const express = require('express');
const { createTicket, getTickets, updateTicketStatus } = require('../controllers/ticketController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', authMiddleware, createTicket);
router.get('/', authMiddleware, getTickets);
router.put('/:id', authMiddleware, updateTicketStatus);

module.exports = router;
