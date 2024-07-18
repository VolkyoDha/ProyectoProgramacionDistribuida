const mongoose = require('mongoose');

const preferencesSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
    theme: { type: String, default: 'light' },
    language: { type: String, default: 'en' },
    notificationsEnabled: { type: Boolean, default: true }
});

module.exports = mongoose.model('Preferences', preferencesSchema);
