import WatchlistRepository from '../../Assignment_11/repositories/inmemory/InMemoryWatchlistRepository';

class WatchlistService {
    constructor() {
        this.watchlistRepo = new WatchlistRepository();
    }

    async addMovieToWatchlist(userId, movieId) {
        const watchlist = await this.watchlistRepo.getByUserId(userId);
        if (watchlist.movies.includes(movieId)) {
            throw new Error('Movie already in watchlist');
        }
        watchlist.movies.push(movieId);
        return await this.watchlistRepo.update(userId, watchlist);
    }

    async getWatchlist(userId) {
        return await this.watchlistRepo.getByUserId(userId);
    }
}

export default WatchlistService;
