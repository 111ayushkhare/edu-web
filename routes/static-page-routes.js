// Importing required npm packages
const router = require('express').Router();

/**
 * Route for Home Page
 */
router.get('', (req, res) => {
    res.render('home');
});


/**
 * Route for Donate Page
 */
router.get('/donate', (req, res) => {
    res.render('donate');
});

/**
 * Routes for Authorization Pages
 */
 router.get('/auth/login', (req, res) => {
    res.render('./auth/login');
});

router.get('/auth/signup', (req, res) => {
    res.render('./auth/signup');
});

router.get('/auth/profile', (req, res) => {
    res.render('./auth/profile');
});

/**
 * Routes for Videos section
 */
router.get('/videos/vid-app-dev', (req, res) => {
    res.render('./videos/vid-app-dev');
});

router.get('/videos/vid-core-cs', (req, res) => {
    res.render('./videos/vid-core-cs');
});

router.get('/videos/vid-data-science', (req, res) => {
    res.render('./videos/vid-data-science');
});

router.get('/videos/vid-programming', (req, res) => {
    res.render('./videos/vid-programming');
});

router.get('/videos/vid-web-dev', (req, res) => {
    res.render('./videos/vid-web-dev');
});


/**
 * Routes for Books section
 */
router.get('/books/books-app-dev', (req, res) => {
    res.render('./books/books-app-dev');
});

router.get('/books/books-core-cs', (req, res) => {
    res.render('./books/books-core-cs');
});

router.get('/books/books-data-science', (req, res) => {
    res.render('./books/books-data-science');
});

router.get('/books/books-programming', (req, res) => {
    res.render('./books/books-programming');
});

router.get('/books/books-web-dev', (req, res) => {
    res.render('./books/books-web-dev');
});


/**
 * Routes for Tutorials section
 */
 router.get('/tutorials/tut-app-dev', (req, res) => {
    res.render('./tutorials/tut-app-dev');
});

router.get('/tutorials/tut-core-cs', (req, res) => {
    res.render('./tutorials/tut-core-cs');
});

router.get('/tutorials/tut-data-science', (req, res) => {
    res.render('./tutorials/tut-data-science');
});

router.get('/tutorials/tut-programming', (req, res) => {
    res.render('./tutorials/tut-programming');
});

router.get('/tutorials/tut-web-dev', (req, res) => {
    res.render('./tutorials/tut-web-dev');
});


/**
 * Routes for Courses section
 */
 router.get('/courses/courses-app-dev', (req, res) => {
    res.render('./courses/courses-app-dev');
});

router.get('/courses/courses-core-cs', (req, res) => {
    res.render('./courses/courses-core-cs');
});

router.get('/courses/courses-data-science', (req, res) => {
    res.render('./courses/courses-data-science');
});

router.get('/courses/courses-programming', (req, res) => {
    res.render('./courses/courses-programming');
});

router.get('/courses/courses-web-dev', (req, res) => {
    res.render('./courses/courses-web-dev');
});


/**
 * Routes for Practice section
 */
router.get('/practice/practice-app-dev', (req, res) => {
    res.render('./practice/practice-app-dev');
});

router.get('/practice/practice-core-cs', (req, res) => {
    res.render('./practice/practice-core-cs');
});

router.get('/practice/practice-data-science', (req, res) => {
    res.render('./practice/practice-data-science');
});

router.get('/practice/practice-programming', (req, res) => {
    res.render('./practice/practice-programming');
});

router.get('/practice/practice-web-dev', (req, res) => {
    res.render('./practice/practice-web-dev');
});


// Exporting all the routes
module.exports = router;