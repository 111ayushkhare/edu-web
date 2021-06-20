// Importing custom modules
const User = require('../models/user-models');

const signup = async (req, res) => {
    try {
        let user = await User.findOne({ email: req.body.email });
        if (!user) {
            user =  new User(req.body);
            await user.save();
            res.status(201).send({
                message: "User created successfully",
                status: 201,
            });
        } else {
            throw new Error("User already exists, please login or signup with a different email!");
        }
    } catch (error) {
        res.status(403).send({
            message: "Failed to create user",
            status: 403,
            error: error
        });
    }
} 

const login = async (req, res) => {
    try {
        const user = await User.findByEmailAndPassword(req.body.email, req.body.password);
        const token = await user.generateAuthTokens();
        res.status(200).send({
            message : "Login Successful !",
            status: 200,
            token
        });
    } catch (error) {
        res.status(401).send({ 
            message: "Login failed, try again",
            status: 201,
            error 
        });
    }
};

const profile = async (req, res) => {
    try {
        res.send({
            name: req.user.name,
            email: req.user.email,
        });
    } catch (error) {
        res.status(401).send({
            message: "Unauthorized, please login first",
            status: 401,
            error
        });
    }
}

const logout = async (req, res) => {
    try {
        req.user.tokens = req.user.tokens.filter((token) => {
            return token.token !== req.token;
        });
        await req.user.save();
        res.status(200).send({
            message: "You are logged out successfully",
            status: 200
        });
    } catch(error) {
        res.status(500).send({
            message: "Unable to logout!",
            status: 500,
            error
        });
    }
};

const logoutAll = async (req, res) => {
    try {
        req.user.tokens = [];
        await req.user.save();
        res.status(200).send({ 
            message: "Logged out of all devices successfully!",
            status: 200
        });
    } catch (error) {
        res.status(500).send({
            message: "Unable to logout!",
            status: 500,
            error
        });
    }
};

// Exporting all the methods defined above
module.exports = { 
    signup,
    login,
    profile,
    logout,
    logoutAll
};