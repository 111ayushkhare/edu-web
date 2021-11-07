// Importing required npm packages
const mongoose = require('mongoose');

// Defining the user Schema
const bookSchema = new mongoose.Schema({
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
    ratings: [
        // type: Number,
        // required: true,
        // person: {
        //     type: mongoose.Schema.Types.ObjectId,
        //     required: true,
        //     ref: 'User'
        // }
        {
            rating:Number,
            person:mongoose.Schema.Types.ObjectId
        }
    ],
    recommendation: {
        type: Number,
        required: true,
        default: 0
    },
    // person: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     required: true,
    //     ref: 'User'
    // }
});

// Expporting the user model
module.exports = mongoose.model('Book', bookSchema);;