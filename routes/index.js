const express = require('express');
const router = express.Router();
const movieController = require('../controllers/movie');

// GET landing page.
router.get('/', movieController.all_movies);

module.exports = router;