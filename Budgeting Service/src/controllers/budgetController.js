const Budget = require('../models/budgetModel');

const getBudgets = async (req, res) => {
    try {
        const budgets = await Budget.find({ userId: req.user.id });
        res.json(budgets);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

const createBudget = async (req, res) => {
    const { category, allocatedAmount, spentAmount, month } = req.body;

    try {
        const newBudget = new Budget({
            userId: req.user.id,
            category,
            allocatedAmount,
            spentAmount,
            month
        });
        await newBudget.save();
        res.status(201).json(newBudget);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

const deleteBudget = async (req, res) => {
    try {
        await Budget.findByIdAndDelete(req.params.id);
        res.json({ message: 'Budget deleted' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = { getBudgets, createBudget, deleteBudget };
