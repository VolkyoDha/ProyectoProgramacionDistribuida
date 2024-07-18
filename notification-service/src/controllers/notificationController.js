const Notification = require('../models/notificationModel');
const sendEmail = require('../utils/email');

const sendNotification = async (req, res) => {
    const { userId, message, type } = req.body;

    try {
        const newNotification = new Notification({
            userId,
            message,
            type
        });
        await newNotification.save();

        if (type === 'email') {
            // Aquí deberías recuperar el email del usuario desde la base de datos
            const userEmail = 'user@example.com'; // reemplaza esto con el email real del usuario
            await sendEmail(userEmail, 'Notification', message);
        }

        res.status(201).json(newNotification);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = { sendNotification };
