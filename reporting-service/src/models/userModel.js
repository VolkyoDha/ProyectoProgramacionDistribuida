const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    role: { type: String, default: 'user' }, // 'user' or 'admin'
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', userSchema);
