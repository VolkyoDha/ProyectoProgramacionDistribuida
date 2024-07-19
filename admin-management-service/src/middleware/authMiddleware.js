const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.sendStatus(401); // Unauthorized
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            return res.sendStatus(403); // Forbidden
        }
        req.user = user;  // Asignar el objeto de usuario completo
        next();
    });
};

const adminMiddleware = (req, res, next) => {
    if (req.user.role !== 'admin') {
        return res.sendStatus(403); // Forbidden
    }
    next();
};

module.exports = { authMiddleware, adminMiddleware };
