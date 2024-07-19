const Subscription = require('../models/subscriptionModel');

const createSubscription = async (req, res) => {
    const { plan, endDate } = req.body;

    try {
        const newSubscription = new Subscription({
            userId: req.user.id,
            plan,
            endDate
        });
        await newSubscription.save();
        res.status(201).json(newSubscription);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

const getSubscriptions = async (req, res) => {
    try {
        const subscriptions = await Subscription.find({ userId: req.user.id });
        res.json(subscriptions);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

const cancelSubscription = async (req, res) => {
    try {
        const subscription = await Subscription.findByIdAndUpdate(
            req.params.id,
            { status: 'cancelled' },
            { new: true }
        );
        if (!subscription) {
            return res.status(404).json({ message: 'Subscription not found' });
        }
        res.json(subscription);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = { createSubscription, getSubscriptions, cancelSubscription };
