// Importing required npm packages
const mongoose = require('mongoose');

// Defining the user Schema
const ratingSchema = new mongoose.Schema({
    category: {
        type: String,
        required: true,
    },
    bookLink: {
        type: String,
        required: true,
    },
    bookImageLink: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
    },
    recommendation: {
        type: Number,
        required: true,
    },
    person: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
});

const Rating = mongoose.model('Rating', ratingSchema);

// Expporting the user model
module.exports = Rating;