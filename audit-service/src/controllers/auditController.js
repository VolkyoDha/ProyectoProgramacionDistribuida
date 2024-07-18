const Audit = require('../models/auditModel');

const logAction = async (req, res) => {
    const { userId, action } = req.body;

    try {
        const newAudit = new Audit({
            userId,
            action
        });
        await newAudit.save();
        res.status(201).json(newAudit);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

const getAuditLogs = async (req, res) => {
    try {
        const logs = await Audit.find().populate('userId', 'email');
        res.json(logs);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = { logAction, getAuditLogs };
