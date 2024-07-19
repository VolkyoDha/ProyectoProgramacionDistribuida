const Preferences = require('../models/preferencesModel');

const getPreferences = async (req, res) => {
    try {
        const preferences = await Preferences.findOne({ userId: req.user.id });
        if (!preferences) {
            return res.status(404).json({ message: 'Preferences not found' });
        }
        res.json(preferences);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

const updatePreferences = async (req, res) => {
    const { theme, language, notificationsEnabled } = req.body;

    try {
        const preferences = await Preferences.findOneAndUpdate(
            { userId: req.user.id },
            { theme, language, notificationsEnabled },
            { new: true, upsert: true }
        );
        res.json(preferences);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = { getPreferences, updatePreferences };
