const Ticket = require('../models/ticketModel');

const createTicket = async (req, res) => {
    const { subject, description } = req.body;

    try {
        const newTicket = new Ticket({
            userId: req.user.id,
            subject,
            description
        });
        await newTicket.save();
        res.status(201).json(newTicket);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

const getTickets = async (req, res) => {
    try {
        const tickets = await Ticket.find({ userId: req.user.id });
        res.json(tickets);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

const updateTicketStatus = async (req, res) => {
    const { status } = req.body;

    try {
        const ticket = await Ticket.findByIdAndUpdate(
            req.params.id,
            { status, updatedAt: Date.now() },
            { new: true }
        );
        if (!ticket) {
            return res.status(404).json({ message: 'Ticket not found' });
        }
        res.json(ticket);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = { createTicket, getTickets, updateTicketStatus };
