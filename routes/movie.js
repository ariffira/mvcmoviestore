const express = require('express');
const router = express.Router();
const movieController = require('../controllers/movie');

// create new movie documents
router.post('/create', movieController.create_movie);


// read all movies list, 10 for each page
router.get('/list', function(req, res) {
    res.send('movie list')
});

// Find movie data by id
router.get('/detail/:id', movieController.detail_movie);

// Update movie data
router.get('/update/:id', movieController.update_movie_form);
router.post('/update', movieController.update_movie_data);

// Delete movie doc from database
router.get('/delete/:id', movieController.delete_movie);

module.exports = router;