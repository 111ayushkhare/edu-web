// Importing required external npm packages
const express = require('express');
const hbs = require('hbs');

// Importing node internal package
const path = require('path');

// Importing custom modules
const userAuthRoutes = require('./routes/auth-api-routes');
const staticPageRoutes = require('./routes/static-page-routes');
require('./models/db/mongodb-connector');

// Defining path used by express
const publicDirPath = path.join(__dirname, './public');
const viewsDirPath = path.join(__dirname, './views/main-views');
const partialsDirPath = path.join(__dirname, './views/partials');

// Declaring port number
const PORT = process.env.PORT || 3000;

const app = express();

// Setting up handlebars and views
app.set('view engine', 'hbs');
app.set('views', viewsDirPath);
hbs.registerPartials(partialsDirPath);

app.use(express.static(publicDirPath));
app.use(express.json());
app.use('/', staticPageRoutes);
app.use('/userAuth', userAuthRoutes);

app.listen(PORT, () => {
    console.log("Server is up and running at -> http://localhost:" + PORT);
});
