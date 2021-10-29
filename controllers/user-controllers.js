// Importing custom modules
const Rating = require('../models/rating-models');
const User = require('../models/user-models');

const signup = async (req, res) => {
    try {
        let user = await User.findOne({ email: req.body.email });
        
        if (!user) {
            user =  new User(req.body);
            await user.save();
            res.status(201).send({ message: "User created successfully" });
        } else {
            res.status(400).send({ message: "User already exists" });
        }
    } catch (error) {
        res.status(403).send({
            message: "Failed to create user",
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
            token
        });
    } catch (error) {
        res.status(401).send({ 
            message: "Login failed, try again", 
            error 
        });
    }
};

const profile = async (req, res) => {
    try {
        let user = await User.findOne( { _id: req.user._id }, { password: 0 } );
        
        if (user) {
            const rating = await Rating.find({ person: req.user._id });
            user = {
                ...user.toObject(),
                rating
            };
            res.status(200).send({
                message: "User profile fetched successfully",
                user
            });
        } else {
            res.status(400).send({ message: "User not found" });
        }
    } catch (error) {
        res.status(401).send({
            message: "Unauthorized, please login first",
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
        res.status(200).send({ message: "You are logged out successfully" });
    } catch(error) {
        res.status(500).send({
            message: "Unable to logout!",
            error
        });
    }
};

const logoutAll = async (req, res) => {
    try {
        req.user.tokens = [];
        await req.user.save();
        res.status(200).send({ message: "Logged out of all devices successfully!" });
    } catch (error) {
        res.status(500).send({
            message: "Unable to logout!",
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