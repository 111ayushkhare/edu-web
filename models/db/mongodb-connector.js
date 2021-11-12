// Importing required npm packages
const mongoose = require('mongoose');

// Importing custom modules
const processVar =  require('../../config/nodemon.json');

/* const LOCAL_DB_URL = 'mongodb://127.0.0.1:27017/edu-admin'; */

const URL = 'mongodb+srv://edu-admin:' 
    + processVar.env.MONGO_ATLAS_DB_PASSWD 
    + '@edu-web.w9uag.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

const CONNECTION_PARAMS = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
};

// Connecting to Mongodb-Atlas database
mongoose.connect(URL, CONNECTION_PARAMS)
    .then(() => {
        console.log("Connected to database successfully!");
    }).catch((error) => {
        console.log({
            message: "Unable to connect to the database",
            error
        });
    });