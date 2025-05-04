import express from 'express';
import WatchlistService from '../services/WatchlistService.js';

const router = express.Router();
const watchlistService = new WatchlistService();

router.get('/users/:userId/watchlist', async (req, res) => {
    try {
        const watchlist = await watchlistService.getWatchlist(req.params.userId);
        res.json(watchlist);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
});

router.post('/users/:userId/watchlist', async (req, res) => {
    try {
        const updatedWatchlist = await watchlistService.addMovieToWatchlist(req.params.userId, req.body.movieId);
        res.json(updatedWatchlist);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

export default router;
