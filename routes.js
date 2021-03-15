const route = require('express').Router();

// Get home page html
route.get('/home', (req, res) => {
    res.sendFile('/home/kitretsu/Repository/Educational Website Design/frontend/routes/home.html');
});

// Get Athentication html files
route.get('/home/authentication/login/login.html', (req, res) => {
    res.sendFile('/home/kitretsu/Repository/Educational Website Design/frontend/routes/authentication/login/login.html');
});
route.get('home/authentication/signup/signup.html', (req, res) => {
    res.sendFile('/home/kitretsu/Repository/Educational Website Design/frontend/routes/authentication/signup/signup.html');
});

// Get Videos section html files
route.get('/home/videos/vid_appDev.html', (req, res) => {
    res.sendFile('/home/kitretsu/Repository/Educational Website Design/frontend/routes/videos/vid_appDev.html');
});
route.get('/home/videos/vid_coreCS.html', (req, res) => {
    res.sendFile('/home/kitretsu/Repository/Educational Website Design/frontend/routes/videos/vid_coreCS.html');
});
route.get('/home/videos/vid_dataScience.html', (req, res) => {
    res.sendFile('/home/kitretsu/Repository/Educational Website Design/frontend/routes/videos/vid_dataScience.html');
});
route.get('/home/videos/vid_programming.html', (req, res) => {
    res.sendFile('/home/kitretsu/Repository/Educational Website Design/frontend/routes/videos/vid_programming.html');
});
route.get('/home/videos/vid_webDev.html', (req, res) => {
    res.sendFile('/home/kitretsu/Repository/Educational Website Design/frontend/routes/videos/vid_webDev.html');
});

// Get Books section html files
route.get('/home/books/books_appDev.html', (req, res) => {
    res.sendFile('/home/kitretsu/Repository/Educational Website Design/frontend/routes/books/books_appDev.html');
});
route.get('/home/books/books_coreCS.html', (req, res) => {
    res.sendFile('/home/kitretsu/Repository/Educational Website Design/frontend/routes/books/books_coreCS.html');
});
route.get('/home/books/books_dataScience.html', (req, res) => {
    res.sendFile('/home/kitretsu/Repository/Educational Website Design/frontend/routes/books/books_dataScience.html');
});
route.get('/home/books/books_programming.html', (req, res) => {
    res.sendFile('/home/kitretsu/Repository/Educational Website Design/frontend/routes/books/books_programming.html');
});
route.get('/home/books/books_webDev.html', (req, res) => {
    res.sendFile('/home/kitretsu/Repository/Educational Website Design/frontend/routes/books/books_webDev.html');
});

// Get Notes section html files
route.get('/home/notes/notes_appDev.html', (req, res) => {
    res.sendFile('/home/kitretsu/Repository/Educational Website Design/frontend/routes/notes/notes_appDev.html');
});
route.get('/home/notes/notes_coreCS.html', (req, res) => {
    res.sendFile('/home/kitretsu/Repository/Educational Website Design/frontend/routes/notes/notes_coreCS.html');
});
route.get('/home/notes/notes_dataScience.html', (req, res) => {
    res.sendFile('/home/kitretsu/Repository/Educational Website Design/frontend/routes/notes/notes_dataScience.html');
});
route.get('/home/notes/notes_programming.html', (req, res) => {
    res.sendFile('/home/kitretsu/Repository/Educational Website Design/frontend/routes/notes/notes_programming.html');
});
route.get('/home/notes/notes_webDev.html', (req, res) => {
    res.sendFile('/home/kitretsu/Repository/Educational Website Design/frontend/routes/notes/notes_webDev.html');
});

// Get Courses section html files
route.get('/home/courses/course_appDev.html', (req, res) => {
    res.sendFile('/home/kitretsu/Repository/Educational Website Design/frontend/routes/courses/course_appDev.html');
});
route.get('/home/courses/course_coreCS.html', (req, res) => {
    res.sendFile('/home/kitretsu/Repository/Educational Website Design/frontend/routes/courses/course_coreCS.html');
});
route.get('/home/courses/course_dataScience.html', (req, res) => {
    res.sendFile('/home/kitretsu/Repository/Educational Website Design/frontend/routes/courses/course_dataScience.html');
});
route.get('/home/courses/course_programming.html', (req, res) => {
    res.sendFile('/home/kitretsu/Repository/Educational Website Design/frontend/routes/courses/course_programming.html');
});
route.get('/home/courses/course_webDev.html', (req, res) => {
    res.sendFile('/home/kitretsu/Repository/Educational Website Design/frontend/routes/courses/course_webDev.html');
});

// Get Assignments section html files
route.get('/home/assignments/assign_appDev.html', (req, res) => {
    res.sendFile('/home/kitretsu/Repository/Educational Website Design/frontend/routes/assignments/assign_appDev.html');
});
route.get('/home/assignments/assign_coreCS.html', (req, res) => {
    res.sendFile('/home/kitretsu/Repository/Educational Website Design/frontend/routes/assignments/assign_coreCS.html');
});
route.get('/home/assignments/assign_dataScience.html', (req, res) => {
    res.sendFile('/home/kitretsu/Repository/Educational Website Design/frontend/routes/assignments/assign_dataScience.html');
});
route.get('/home/assignments/assign_programming.html', (req, res) => {
    res.sendFile('/home/kitretsu/Repository/Educational Website Design/frontend/routes/assignments/assign_programming.html');
});
route.get('/home/assignments/assign_webDev.html', (req, res) => {
    res.sendFile('/home/kitretsu/Repository/Educational Website Design/frontend/routes/assignments/assign_webDev.html');
});

// Get Donate page html
route.get('/home/donate.html', (req, res) => {
    res.sendFile('/home/kitretsu/Repository/Educational Website Design/frontend/routes/donate.html');
});

module.exports = route;