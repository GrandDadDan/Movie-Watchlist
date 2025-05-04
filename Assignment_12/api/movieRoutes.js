import express from 'express';
import MovieService from '../services/MovieService.js';

const router = express.Router();
const movieService = new MovieService();
/**
 * @swagger
 * /api/movies:
 *   get:
 *     summary: Fetch all movies
 *     tags:
 *       - Movies
 *     responses:
 *       200:
 *         description: List of movies
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                   title:
 *                     type: string
 *                   checkedOut:
 *                     type: boolean
 *       500:
 *         description: Server error
 */
router.get('/movies', async (req, res) => {
    try {
        const movies = await movieService.getAllMovies();
        res.json(movies);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

/**
 * @swagger
 * /api/movies:
 *   post:
 *     summary: Create a new movie
 *     tags:
 *       - Movies
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               genre:
 *                 type: string
 *     responses:
 *       201:
 *         description: Movie created
 *       400:
 *         description: Bad request
 */
router.post('/movies', async (req, res) => {
    try {
        const movie = await movieService.createMovie(req.body);
        res.status(201).json(movie);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});
/**
 * @swagger
 * /api/movies/{id}:
 *   put:
 *     summary: Update a movie
 *     tags:
 *       - Movies
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Movie ID
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               genre:
 *                 type: string
 *     responses:
 *       200:
 *         description: Movie updated
 *       400:
 *         description: Invalid movie ID or data
 */
router.put('/movies/:id', async (req, res) => {
    try {
        const movie = await movieService.updateMovie(req.params.id, req.body);
        res.json(movie);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

/**
 * @swagger
 * /api/movies/{id}/checkout:
 *   post:
 *     summary: Checkout a movie
 *     tags:
 *       - Movies
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Movie ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Movie checked out successfully
 *       400:
 *         description: Movie is already checked out or not found
 */
router.post('/movies/:id/checkout', async (req, res) => {
    try {
        const movie = await movieService.checkoutMovie(req.params.id);
        res.json({ message: `Movie ${req.params.id} checked out`, movie });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

export default router;
