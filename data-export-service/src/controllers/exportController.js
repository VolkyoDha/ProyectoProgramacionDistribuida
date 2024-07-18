const { Parser } = require('json2csv');
const User = require('../models/userModel'); // Asumiendo que el modelo de usuario se define en otra parte

const exportData = async (req, res) => {
    try {
        const users = await User.find();
        const json2csvParser = new Parser();
        const csv = json2csvParser.parse(users);

        res.header('Content-Type', 'text/csv');
        res.attachment('users.csv');
        res.send(csv);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = { exportData };
