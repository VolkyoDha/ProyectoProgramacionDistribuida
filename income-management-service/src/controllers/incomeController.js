const Income = require('../models/incomeModel');

const getIncomes = async (req, res) => {
    try {
        const incomes = await Income.find({ userId: req.user.id });
        res.json(incomes);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

const createIncome = async (req, res) => {
    const { source, amount, date } = req.body;

    try {
        const newIncome = new Income({
            userId: req.user.id,
            source,
            amount,
            date
        });
        await newIncome.save();
        res.status(201).json(newIncome);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

const deleteIncome = async (req, res) => {
    try {
        await Income.findByIdAndDelete(req.params.id);
        res.json({ message: 'Income deleted' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = { getIncomes, createIncome, deleteIncome };
