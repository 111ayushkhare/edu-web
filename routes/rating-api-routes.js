// Importing required npm packages
const router = require('express').Router();

// Importing custom modules
const controllers = require('../controllers/book-controllers');
const auth = require('../middleware/auth');

/**
 * API endpoint for Signing-up
 */
router.post('/bookrating', auth, async (req, res) => {
    controllers.rate(req, res);
});

router.get('/fetchAllRatings', async (req, res) => {
    controllers.fetchRatings(req, res);
});

router.post('/addBook', async (req, res) => {
    controllers.addBook(req, res);
});
router.post('/rateBook', auth, async (req, res) => {
    controllers.rateBook(req, res);
});

router.get('/user-vs-book', async (req, res) => {
    controllers.userBook(req, res);
});

module.exports = router;