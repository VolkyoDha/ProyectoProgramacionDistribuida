const User = require('../models/userModel');
const ServiceStatus = require('../models/serviceStatusModel');

const getUserStatistics = async (req, res) => {
    try {
        const userCount = await User.countDocuments();
        const adminCount = await User.countDocuments({ role: 'admin' });
        const userCountByDate = await User.aggregate([
            {
                $group: {
                    _id: { $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } },
                    count: { $sum: 1 }
                }
            }
        ]);

        res.json({ userCount, adminCount, userCountByDate });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

const getServiceStatus = async (req, res) => {
    try {
        const serviceStatus = await ServiceStatus.find();
        res.json(serviceStatus);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = { getUserStatistics, getServiceStatus };
