// Importing required npm packages
const router = require('express').Router();

// Importing custom modules
const controllers = require('../controllers/rating-controllers');
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

module.exports = router;