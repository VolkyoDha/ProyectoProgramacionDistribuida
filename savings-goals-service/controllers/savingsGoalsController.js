const SavingsGoal = require('../models/savingsGoalModel');

const getSavingsGoals = async (req, res) => {
    try {
        const savingsGoals = await SavingsGoal.find({ userId: req.user.id });
        res.json(savingsGoals);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

const createSavingsGoal = async (req, res) => {
    const { goalName, targetAmount, currentAmount, deadline } = req.body;

    try {
        const newSavingsGoal = new SavingsGoal({
            userId: req.user.id,
            goalName,
            targetAmount,
            currentAmount,
            deadline
        });
        await newSavingsGoal.save();
        res.status(201).json(newSavingsGoal);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

const deleteSavingsGoal = async (req, res) => {
    try {
        await SavingsGoal.findByIdAndDelete(req.params.id);
        res.json({ message: 'Savings goal deleted' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = { getSavingsGoals, createSavingsGoal, deleteSavingsGoal };
