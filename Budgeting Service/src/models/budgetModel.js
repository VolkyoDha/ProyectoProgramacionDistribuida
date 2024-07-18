const mongoose = require('mongoose');

const budgetSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
    category: { type: String, required: true },
    allocatedAmount: { type: Number, required: true },
    spentAmount: { type: Number, default: 0 },
    month: { type: String, required: true }
});

module.exports = mongoose.model('Budget', budgetSchema);
