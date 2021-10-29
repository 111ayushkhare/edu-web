// Importing modals
const Rating = require('../models/rating-models');
const User = require('../models/user-models');

const rate = async (req, res) => {
    try {
        let rating = await Rating.findOne({
            person: req.user._id,
            user: req.user._id
        });

        if (!rating) {
            rating = new Rating({
                ...req.body,
                person: req.user._id
            });
            console.log(rating);

            let user = await User.findOneAndUpdate({ _id: req.user._id }, {
                $push: {
                    rating: rating._id
                }
            });
            console.log(user);
            await rating.save();

            res.status(201).send({
                message: "Rating added successfuly",
                rating
            });
        }
    } catch (error) {
        res.status(403).send({
            message: "Failed to rate",
            status: 403,
            error: error
        });
    }
};

const fetchRatings = async (req, res) => {
    try {
        await Rating.find({}, function(err, ratings) {
            if (err) {
                throw new Error("No ratings found!");
            } else {
                res.json(ratings);
            }
        });       
    } catch (error) {
        res.status(403).send({
            message: "Failed to fetch ratings",
            status: 403,
            error: error
        });
    }
};

module.exports = { 
    rate,
    fetchRatings,
 };