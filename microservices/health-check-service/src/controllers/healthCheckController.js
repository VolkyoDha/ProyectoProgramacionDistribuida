const ServiceStatus = require('../models/serviceStatusModel');

const checkHealth = async (req, res) => {
    try {
        const services = await ServiceStatus.find();
        res.json(services);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

const updateHealth = async (req, res) => {
    const { serviceName, status } = req.body;

    try {
        const service = await ServiceStatus.findOneAndUpdate(
            { serviceName },
            { status, checkedAt: Date.now() },
            { new: true, upsert: true }
        );
        res.json(service);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = { checkHealth, updateHealth };
