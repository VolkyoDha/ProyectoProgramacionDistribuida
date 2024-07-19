const mongoose = require('mongoose');

const incomeSourceSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
    sourceName: { type: String, required: true },
    sourceType: { type: String, required: true },
    balance: { type: Number, required: true, default: 0 }
});

module.exports = mongoose.model('IncomeSource', incomeSourceSchema);
