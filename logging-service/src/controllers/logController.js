const Log = require('../models/logModel');
const logger = require('../utils/logger');

const createLog = async (req, res) => {
    const { level, message } = req.body;

    try {
        const newLog = new Log({
            level,
            message
        });
        await newLog.save();

        logger.log({
            level,
            message
        });

        res.status(201).json(newLog);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

const getLogs = async (req, res) => {
    try {
        const logs = await Log.find();
        res.json(logs);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = { createLog, getLogs };
