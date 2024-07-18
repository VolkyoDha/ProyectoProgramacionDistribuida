const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isVerified: { type: Boolean, default: false },
    name: { type: String },
    lastName: { type: String },
    gender: { type: String },
    role: { type: String, default: 'user' }  // 'user' or 'admin'
});

module.exports = mongoose.model('User', userSchema);
