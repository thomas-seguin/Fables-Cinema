const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const {
    check,
    validationResult
} = require('express-validator');

const Movie = require('../../modles/Movie');
const User = require('../../modles/User');

// @route POST api/movies
// @desc Create or update movie
// @access Private
router.post('/', [auth, [
    check('name', 'Name is required').not().isEmpty(),
    check('rating', 'Rating is required').not().isEmpty(),
    check('time', 'Time is required').not().isEmpty()
]], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.array()
        });
    }

    const {
        name,
        rating,
        time
    } = req.body;

    try {
        let movie = await Movie.findOne({
            name
        });

        if (movie) {
            // Update
            movie = await Movie.findOneAndUpdate({
                name: req.movie.name
            }, {
                $set: { name, rating, time }
            }, {
                new: true
            });

            return res.json(movie);
        }

        // Create
        movie = new Movie({
            name,
            rating,
            time
        });

        await movie.save();
        res.json(movie)
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route GET api/movies
// @desc Get all movies
// @access Private
router.get('/', async (req, res) => {
    try {
        const movies = await Movie.find();
        res.json(movies);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
})

// @route DELETE api/movies/:id
// @desc Delete a movie
// @access Private
router.delete('/:id', auth, async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.id);

        if (!movie) {
            return res.status(404).json({
                msg: 'Movie not found'
            });
        }

        await movie.remove();

        res.json({
            msg: 'Movie Removed'
        });
    } catch (err) {
        console.error(err.message);
        if (err.kind === 'ObjectId') {
            return res.status(404).json({
                msg: 'Movie not found'
            });
        }
        res.status(500).send('Server Error');
    }
});

// @route GET api/movies/:id
// @desc Get Movie by ID
// @access Public
router.get('/:id', async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.id);

        if (!movie) {
            return res.status(404).json({
                msg: 'Movie not found'
            });
        }

        res.json(movie);
    } catch (err) {
        console.error(err.message);
        if (err.kind === 'ObjectId') {
            return res.status(404).json({
                msg: 'Movie not found'
            });
        }
        res.status(500).send('Server Error');
    }
});

module.exports = router;
