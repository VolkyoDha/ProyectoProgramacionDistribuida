const mongoose = require('mongoose');

const serviceStatusSchema = new mongoose.Schema({
    serviceName: { type: String, required: true },
    status: { type: String, required: true }, // 'running', 'stopped', etc.
    checkedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('ServiceStatus', serviceStatusSchema);
