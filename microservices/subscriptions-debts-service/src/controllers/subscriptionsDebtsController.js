const SubscriptionDebt = require('../models/subscriptionDebtModel');

const getSubscriptionsDebts = async (req, res) => {
    try {
        const subscriptionsDebts = await SubscriptionDebt.find({ userId: req.user.id });
        res.json(subscriptionsDebts);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

const createSubscriptionDebt = async (req, res) => {
    const { name, type, amount, dueDate } = req.body;

    try {
        const newSubscriptionDebt = new SubscriptionDebt({
            userId: req.user.id,
            name,
            type,
            amount,
            dueDate
        });
        await newSubscriptionDebt.save();
        res.status(201).json(newSubscriptionDebt);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

const deleteSubscriptionDebt = async (req, res) => {
    try {
        await SubscriptionDebt.findByIdAndDelete(req.params.id);
        res.json({ message: 'Subscription or debt deleted' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = { getSubscriptionsDebts, createSubscriptionDebt, deleteSubscriptionDebt };
