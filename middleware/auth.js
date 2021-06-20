// Importing required npm packages
const jwt = require('jsonwebtoken');

// Importing custom modules
const User = require('../models/user-models');
const processVar = require('../config/nodemon.json');

const auth = async (req, res, next) => {
    try {
        const token = req.header('Authorization');
        const decoded =  jwt.verify(token, processVar.env.JWT_KEY, {
            expiresIn: '1d'
        });
        const user = await User.findOne({ '_id': decoded._id, 'tokens.token': token });

        if (!user) {
            throw new Error("User not found");
        }

        req.token = token;
        req.user = user;
        next();
    } catch (error) {
        res.status(401).send({
            message: "Authentication required!",
            error
        });
    }
}

// Exporting auth method
module.exports = auth;