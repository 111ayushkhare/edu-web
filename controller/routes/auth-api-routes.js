// Importing required external npm packages
const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Importing custom models
const User = require('../../models/user');
const processVar =  require('../nodemon.json');

const router = express.Router();

// API endpoint for sign-up
router.post('/signup', (req, res, next) => {
    User.find({email: req.body.email})
            .exec()
            .then(user => {
                if (user.length >= 1) {
                    return res.status(409).json({message: 'Mail exists'});
                } else {
                    bcrypt.hash(req.body.password, 10, (err, hash) => {
                        if (err) {
                            return res.status(500).json({error: err});
                        } else {
                            const user = new User({
                                _id: new mongoose.Types.ObjectId,
                                name: req.body.name,
                                email: req.body.email,
                                password: hash
                            });
                            user.save()
                                .then(result => {
                                    console.log(result);
                                    res.status(201).json({message: 'User created'});
                                })
                                .catch(err => {
                                    console.log(err);
                                    res.status(500).json({
                                        error: err
                                    });
                                });
                        }
                    });
                }
            });
});

// API endpoint for login-up
router.post('/login', (req, res, next) => {
    User.find({email: req.body.email})
        .exec()
        .then(user => {
            if (user.length < 1) {
                return res.status(401).json({
                    message: 'Auth failed'
                });
            }
            bcrypt.compare(req.body.password, user[0].password, (err, result) => {
                console.log(req.body.password, user[0].password);
                if (err) {
                    console.log('f1');
                    return res.status(401).json({
                        message: 'Auth failed'
                    });
                }
                console.log(result);
                if (result) {
                    console.log('s1');
                    const token = jwt.sign(
                        {
                            email: user[0].email,
                            userId: user[0]._id
                        }, 
                        processVar.env.JWT_KEY,
                        {
                            expiresIn: "1h"
                        }
                    );
                    return res.status(200).json({
                        message: 'Auth successful',
                        token: token
                    });
                }
                console.log('f2');
                res.status(401).json({
                    message: 'Auth failed'
                });
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({error: err});
        });
});

// API endpoint to delete account
router.delete('/:userId', (req, res, next) => {
    User.remove({_id: req.params.userId})
        .exec()
        .then(result => {
            res.status(200).json({message: 'User deleted'});
        })
        .catch(err => {
            res.status(500).json({
                error: err
            });
        });
});

// Exporting all API endpoints in the form of routes
module.exports = router;