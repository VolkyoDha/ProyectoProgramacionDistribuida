const IncomeSource = require('../models/incomeSourceModel');

const getIncomeSources = async (req, res) => {
    try {
        const incomeSources = await IncomeSource.find({ userId: req.user.id });
        res.json(incomeSources);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

const createIncomeSource = async (req, res) => {
    const { sourceName, sourceType, balance } = req.body;

    try {
        const newIncomeSource = new IncomeSource({
            userId: req.user.id,
            sourceName,
            sourceType,
            balance
        });
        await newIncomeSource.save();
        res.status(201).json(newIncomeSource);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

const deleteIncomeSource = async (req, res) => {
    try {
        await IncomeSource.findByIdAndDelete(req.params.id);
        res.json({ message: 'Income source deleted' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = { getIncomeSources, createIncomeSource, deleteIncomeSource };
