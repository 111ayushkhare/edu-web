// Importing required external npm packages
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const hbs = require('hbs');

// Importing node internal package
const path = require('path');

// Importing custom modules
const userAuthRoutes = require('./routes/auth-api-routes');
const staticPageRoutes = require('./routes/static-page-routes');
const processVar =  require('./nodemon.json');

// Defining path used by express
const publicDirPath = path.join(__dirname, '../public');
const viewsDirPath = path.join(__dirname, '../views/main-views');
const partialsDirPath = path.join(__dirname, '../views/partials');

// Declaring port number
const PORT = process.env.PORT || 3000;

const app = express();

// Setting up handlebars and views
app.set('view engine', 'hbs');
app.set('views', viewsDirPath);
hbs.registerPartials(partialsDirPath);

app.use(express.static(publicDirPath));
app.use('/', staticPageRoutes);


// mongoose.connect(
//     'mongodb+srv://node-shop:' + 
//     process.env.MONGO_ATLAS_PW + 
//     '@node-shop.fefkq.mongodb.net/<dbname>?retryWrites=true&w=majority',
//     {
//         // useMongoClient: true,
//         useUnifiedTopology : true
//     }
// );

// Connecting to mongo-db
mongoose.connect(
    'mongodb+srv://user:' + 
    processVar.env.MONGO_ATLAS_PASSWD +
    '@edu-web.w9uag.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    { 
        //useNewUrlParser : true ,
        useUnifiedTopology : true
    }
);

mongoose.Promise = global.Promise;

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if (req.method === 'OPTIONS') {
        res.header(
            "Access-Control-Allow-Methods",
            "PUT, POST, PATCH, DELETE, GET",
        );
        return res.status(200).json({});
    }
    next();
});

app.use('/userAuth', userAuthRoutes);

app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message,
        }
    });
});

app.listen(PORT, () => {
    console.log("Server is up and running at -> http://localhost:" + PORT);
});
