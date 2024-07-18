const mongoose = require('mongoose');

const savingsGoalSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
    goalName: { type: String, required: true },
    targetAmount: { type: Number, required: true },
    currentAmount: { type: Number, default: 0 },
    deadline: { type: Date, required: true }
});

module.exports = mongoose.model('SavingsGoal', savingsGoalSchema);
