const express = require('express');
const jwt = require('jsonwebtoken');

const router = express.Router();

// Middleware to extract the bearer token from the Authorization header
const extractToken = (req, res, next) => {
    const bearerHeader = req.headers['authorization'];
    if (typeof bearerHeader !== 'undefined') {
        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1];
        req.token = bearerToken;
        next();
    } else {
        res.status(403).json({ message: 'Access forbidden. No token provided.' });
    }
};

router.get('/validateToken', extractToken, (req, res) => {
    const token = req.token;

    // Verify the token
    jwt.verify(token, process.env.JWT_SECRET, (err, authData) => {
        if (err) {
            res.status(401).json({ isValid: false, message: 'Token is invalid or expired' });
        } else {
            res.status(200).json({ isValid: true, message: 'Token is valid', authData });
        }
    });
});

module.exports = router;
