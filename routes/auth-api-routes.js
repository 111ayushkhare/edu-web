// Importing required npm packages
const router = require('express').Router();

// Importing custom modules
const auth = require('../middleware/auth');
const controllers = require('../controllers/user-controllers');

/**
 * API endpoint for Signing-up
 */
router.post('/signup', async (req, res) => {
    controllers.signup(req, res);
});


/**
 * API endpoint for Logging-in
 */
router.post('/login', async (req, res) => {
    controllers.login(req, res);
});


/**
 * API endpoint for Authenticated profile page
 */
router.get('/profile', auth, async (req, res) => {
    controllers.profile(req, res);
});


/**
 * API endpoint for logging-out
 */
router.post('/logout', auth, async (req, res) => {
    controllers.logout(req, res);
});


/**
 * API endpoint for logging-out from all devices
 */
router.post('/logoutAll', auth, async (req, res) => {
    controllers.logoutAll(req, res);
});

// Exporting all API endpoints in the form of routes
module.exports = router;