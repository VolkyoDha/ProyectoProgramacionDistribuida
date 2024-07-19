const mongoose = require('mongoose');

const subscriptionDebtSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
    name: { type: String, required: true },
    type: { type: String, required: true }, // "subscription" o "debt"
    amount: { type: Number, required: true },
    dueDate: { type: Date, required: true }
});

module.exports = mongoose.model('SubscriptionDebt', subscriptionDebtSchema);
