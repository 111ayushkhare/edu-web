const mongoose = require('mongoose');

// Importing modals
const Book = require('../models/book-models');
const User = require('../models/user-models');

const rate = async (req, res) => {
    try {
        let book = await Book.findById(req.body);

        if (!book) {
            book = new Book({
                ...req.body,
                person: req.user._id
            });
            console.log(book);

            let user = await User.findOneAndUpdate({ _id: req.user._id }, {
                $push: {
                    book: book._id
                }
            });
            console.log(user);
            await book.save();

            res.status(201).send({
                message: "Rating added successfuly",
                rating: book
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
        await Book.find({}, function(err, ratings) {
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


const addBook = async (req, res) => {
    try {
        const {category,bookLink,bookImageLink} = req.body;
            book = new Book({
                category,
                bookLink,
                bookImageLink,
                ratings:[],
                recommendation:0
            });
            console.log(book);
            await book.save();

            res.status(201).send({
                message: "Book added successfuly",
            });
    } catch (error) {
        res.status(403).send({
            message: "Failed to rate",
            status: 403,
            error: error
        });
    }
};



const rateBook = async (req, res) => {
    try {
        const {bookId,rating} = req.body;
        const objectId = mongoose.Types.ObjectId(bookId);
        console.log({bookId,rating,objectId})
        Book.updateOne({ _id:objectId },{
            $addToSet:{
                ratings: {
                    rating,
                    person:req.user._id
                }
            }
        }, function (error, success) {
            if (error) {
                console.error(error);
            } else {
                User.updateOne({ _id: req.user._id }, {
                    $addToSet: {
                        rating: {
                            bookId:objectId
                        }
                    }
                },(error,success)=>{
                    if (error) {
                        console.error(error);
                    } else {
                        console.log(success)
                    }
                });
            }
        })
        
        res.status(201).send({
            message: "rating added successfuly",
        });
    } catch (error) {
        res.status(403).send({
            message: "Failed to rate",
            status: 403,
            error: error
        });
    }
};

const userBook = async (req, res) => {
    try{
        const resultCursor = await User.aggregate(
            [
                {
                  '$lookup': {
                    'from': 'books', 
                    'localField': 'rating.bookId', 
                    'foreignField': '_id', 
                    'as': 'book'
                  }
                }, {
                  '$project': {
                    'book.ratings': 1, 
                    'book._id': 1, 
                    'email': 1, 
                    '_id': 1
                  }
                }
            ]
        );
        let result = []
        resultCursor.forEach((ele)=>{
            result.push(ele);
        })
        result.forEach(data=>{
            const x = data.book.forEach((b)=>{
                return b.ratings?.filter((d)=>d.person===data._id)
            })
            // data.book.ratings = x;
        })
        console.log(result);
        res.status(201).send(result);
        
    }catch(error){
        res.status(403).send({
            message: "Failed to fetch",
            error: error
        });
    }
};

module.exports = { 
    rate,
    fetchRatings,
    rateBook,
    addBook,
    userBook
 };



/**
 *  book 1
 *  book 2
 *  book 3
 *
 * {
 * book1: 50
 * 
 * }
 * 
 * [
  {
    "_id": "61878ec645f95434813c9cf1",
    "email": "user1@gmail.com",
    "book": []
  },
  {
    "_id": "61878ed045f95434813c9cf2",
    "email": "user2@gmail.com",
    "book": [
      {
        "_id": "61878f6045f95434813c9cf7",
        "ratings": [
          {
            "_id": "6187926e45f95434813c9cf9",
            "rating": 5,
            "person": "61878ed845f95434813c9cf3"
          },
          {
            "_id": "6187928045f95434813c9cfb",
            "rating": 4,
            "person": "61878ed045f95434813c9cf2"
          }
        ]
      },
      {
        "_id": "61878f6845f95434813c9cf8",
        "ratings": [
          {
            "_id": "6187929c45f95434813c9cfd",
            "rating": 4,
            "person": "61878ed045f95434813c9cf2"
          },
          {
            "_id": "618792a745f95434813c9cff",
            "rating": 5,
            "person": "61878ed845f95434813c9cf3"
          }
        ]
      }
    ]
  },
  {
    "_id": "61878ed845f95434813c9cf3",
    "email": "user3@gmail.com",
    "book": [
      {
        "_id": "61878f6045f95434813c9cf7",
        "ratings": [
          {
            "_id": "6187926e45f95434813c9cf9",
            "rating": 5,
            "person": "61878ed845f95434813c9cf3"
          },
          {
            "_id": "6187928045f95434813c9cfb",
            "rating": 4,
            "person": "61878ed045f95434813c9cf2"
          }
        ]
      },
      {
        "_id": "61878f6845f95434813c9cf8",
        "ratings": [
          {
            "_id": "6187929c45f95434813c9cfd",
            "rating": 4,
            "person": "61878ed045f95434813c9cf2"
          },
          {
            "_id": "618792a745f95434813c9cff",
            "rating": 5,
            "person": "61878ed845f95434813c9cf3"
          }
        ]
      }
    ]
  }
]
 */