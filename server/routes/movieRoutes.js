const express = require('express');
const router = express.Router();
const movieController = require('../controllers/movieController');

// Route for a single featured movie
router.get('/featured', movieController.getFeaturedMovie);

// Route for trending movies
router.get('/trending', movieController.getTrendingMovies);

// Route for top-rated movies
router.get('/top-rated', movieController.getTopRatedMovies);

// Route for movies by genre
router.get('/genres/:genre', movieController.getMoviesByGenre);

module.exports = router;
