const Feedback = require('../models/feedbackModel');

const createFeedback = async (req, res) => {
    const { rating, comment } = req.body;

    try {
        const newFeedback = new Feedback({
            userId: req.user.id,
            rating,
            comment
        });
        await newFeedback.save();
        res.status(201).json(newFeedback);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

const getFeedbacks = async (req, res) => {
    try {
        const feedbacks = await Feedback.find({ userId: req.user.id });
        res.json(feedbacks);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = { createFeedback, getFeedbacks };
