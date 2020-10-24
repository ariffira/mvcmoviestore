const Movie = require('../models/movie');

// CREATE AND SAVE MOVIE
exports.create_movie = (req, res) => {
    req.body.added = Date.now();
    const newMovie = new Movie(req.body);
    // create and save new movie data
    newMovie.save(err=> {
        if(err) throw err;
        res.redirect('/');
    });
}

// All movies list
exports.all_movies = (req, res) => {
    const query = Movie.find().limit(10);
    query.exec((err, result)=> {
        res.render('index', {
            pageTitle: 'Movie library',
            movies: result
        });
    });
}

// READ movie data by ID
exports.detail_movie = (req,res) => {
    const movieId = req.params.id;
    Movie.findById(movieId, (err, result)=> {
        if(err) throw err;
        res.render('detail', {
            pageTitle: 'Movie Detail data',
            movie: result
        });
    });
}
// Update Movie Data form only
/** 
 * todo: reduce detail movie and update movie form function to one
 * */ 
exports.update_movie_form = (req,res) => {
    const movieId = req.params.id;
    const query = Movie.findById(movieId);
    query.exec((err, result)=> {
        if(err) throw err;
        res.render('update', {
            pageTitle: 'Movie Data Update Form',
            movie: result
        });
    });
}

exports.update_movie_data = (req, res) => {
    req.body.updated = Date.now()
    Movie.findByIdAndUpdate(req.body.id, req.body, err=> {
        if(err) throw err;
        res.redirect('/');
    });
}
// Delete Movie data
exports.delete_movie = (req, res) => {
    const movieId = req.params.id;
    Movie.findByIdAndDelete(movieId, err=> {
        if(err) throw err;
        console.log('One movie has been deleted');
        res.redirect('/');
    });
}
