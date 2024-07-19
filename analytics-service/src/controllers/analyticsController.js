const Analytics = require('../models/analyticsModel');

const recordAction = async (req, res) => {
    const { userId, action } = req.body;

    try {
        const newAnalytics = new Analytics({
            userId,
            action
        });
        await newAnalytics.save();
        res.status(201).json(newAnalytics);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

const getActionMetrics = async (req, res) => {
    try {
        const metrics = await Analytics.aggregate([
            {
                $group: {
                    _id: '$action',
                    count: { $sum: 1 }
                }
            },
            {
                $sort: { count: -1 }
            }
        ]);
        res.json(metrics);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = { recordAction, getActionMetrics };
