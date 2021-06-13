const route = require('express').Router();

// Get home page html
route.get('/home', (req, res) => {
    res.sendFile('/home/kitretsu/Repository/Educational Website Design/frontend/routes/home.html');
});
route.get('/home.html', (req, res) => {
    res.sendFile('/home/kitretsu/Repository/Educational Website Design/frontend/routes/home.html');
});

// Get Athentication html files
route.get('/authentication/login/login.html', (req, res) => {
    res.sendFile('/home/kitretsu/Repository/Educational Website Design/frontend/routes/authentication/login/login.html');
});
route.get('/authentication/signup/signup.html', (req, res) => {
    res.sendFile('/home/kitretsu/Repository/Educational Website Design/frontend/routes/authentication/signup/signup.html');
});

// Get Athentication css files
route.get('/authentication/login/login.css', (req, res) => {
    res.sendFile('/home/kitretsu/Repository/Educational Website Design/frontend/routes/authentication/login/login.css');
});
route.get('/authentication/signup/signup.css', (req, res) => {
    res.sendFile('/home/kitretsu/Repository/Educational Website Design/frontend/routes/authentication/signup/signup.css');
});

route.get('/authentication/signup/signup.js', (req, res) => {
    res.sendFile('/home/kitretsu/Repository/Educational Website Design/frontend/routes/authentication/signup/signup.js');
});


// Get Videos section html files
route.get('/videos/vid_appDev.html', (req, res) => {
    res.sendFile('/home/kitretsu/Repository/Educational Website Design/frontend/routes/videos/vid_appDev.html');
});
route.get('/videos/vid_coreCS.html', (req, res) => {
    res.sendFile('/home/kitretsu/Repository/Educational Website Design/frontend/routes/videos/vid_coreCS.html');
});
route.get('/videos/vid_dataScience.html', (req, res) => {
    res.sendFile('/home/kitretsu/Repository/Educational Website Design/frontend/routes/videos/vid_dataScience.html');
});
route.get('/videos/vid_programming.html', (req, res) => {
    res.sendFile('/home/kitretsu/Repository/Educational Website Design/frontend/routes/videos/vid_programming.html');
});
route.get('/videos/vid_webDev.html', (req, res) => {
    res.sendFile('/home/kitretsu/Repository/Educational Website Design/frontend/routes/videos/vid_webDev.html');
});

// Get Books section html files
route.get('/books/books_appDev.html', (req, res) => {
    res.sendFile('/home/kitretsu/Repository/Educational Website Design/frontend/routes/books/books_appDev.html');
});
route.get('/books_coreCS.html', (req, res) => {
    res.sendFile('/home/kitretsu/Repository/Educational Website Design/frontend/routes/books/books_coreCS.html');
});
route.get('/books/books_dataScience.html', (req, res) => {
    res.sendFile('/home/kitretsu/Repository/Educational Website Design/frontend/routes/books/books_dataScience.html');
});
route.get('/books/books_programming.html', (req, res) => {
    res.sendFile('/home/kitretsu/Repository/Educational Website Design/frontend/routes/books/books_programming.html');
});
route.get('/books/books_webDev.html', (req, res) => {
    res.sendFile('/home/kitretsu/Repository/Educational Website Design/frontend/routes/books/books_webDev.html');
});

// Get Notes section html files
route.get('/notes/notes_appDev.html', (req, res) => {
    res.sendFile('/home/kitretsu/Repository/Educational Website Design/frontend/routes/notes/notes_appDev.html');
});
route.get('/notes/notes_coreCS.html', (req, res) => {
    res.sendFile('/home/kitretsu/Repository/Educational Website Design/frontend/routes/notes/notes_coreCS.html');
});
route.get('/notes/notes_dataScience.html', (req, res) => {
    res.sendFile('/home/kitretsu/Repository/Educational Website Design/frontend/routes/notes/notes_dataScience.html');
});
route.get('/notes/notes_programming.html', (req, res) => {
    res.sendFile('/home/kitretsu/Repository/Educational Website Design/frontend/routes/notes/notes_programming.html');
});
route.get('/notes/notes_webDev.html', (req, res) => {
    res.sendFile('/home/kitretsu/Repository/Educational Website Design/frontend/routes/notes/notes_webDev.html');
});

// Get Courses section html files
route.get('/courses/course_appDev.html', (req, res) => {
    res.sendFile('/home/kitretsu/Repository/Educational Website Design/frontend/routes/courses/course_appDev.html');
});
route.get('/courses/course_coreCS.html', (req, res) => {
    res.sendFile('/home/kitretsu/Repository/Educational Website Design/frontend/routes/courses/course_coreCS.html');
});
route.get('/courses/course_dataScience.html', (req, res) => {
    res.sendFile('/home/kitretsu/Repository/Educational Website Design/frontend/routes/courses/course_dataScience.html');
});
route.get('/courses/course_programming.html', (req, res) => {
    res.sendFile('/home/kitretsu/Repository/Educational Website Design/frontend/routes/courses/course_programming.html');
});
route.get('/courses/course_webDev.html', (req, res) => {
    res.sendFile('/home/kitretsu/Repository/Educational Website Design/frontend/routes/courses/course_webDev.html');
});

// Get Assignments section html files
route.get('/assignments/assign_appDev.html', (req, res) => {
    res.sendFile('/home/kitretsu/Repository/Educational Website Design/frontend/routes/assignments/assign_appDev.html');
});
route.get('/assignments/assign_coreCS.html', (req, res) => {
    res.sendFile('/home/kitretsu/Repository/Educational Website Design/frontend/routes/assignments/assign_coreCS.html');
});
route.get('/assignments/assign_dataScience.html', (req, res) => {
    res.sendFile('/home/kitretsu/Repository/Educational Website Design/frontend/routes/assignments/assign_dataScience.html');
});
route.get('/assignments/assign_programming.html', (req, res) => {
    res.sendFile('/home/kitretsu/Repository/Educational Website Design/frontend/routes/assignments/assign_programming.html');
});
route.get('/assignments/assign_webDev.html', (req, res) => {
    res.sendFile('/home/kitretsu/Repository/Educational Website Design/frontend/routes/assignments/assign_webDev.html');
});

// Get Donate page html
route.get('/donate.html', (req, res) => {
    res.sendFile('/home/kitretsu/Repository/Educational Website Design/frontend/routes/donate.html');
});

module.exports = route;