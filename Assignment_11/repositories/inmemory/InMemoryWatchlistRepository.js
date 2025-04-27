import WatchlistRepository from '../interfaces/WatchlistRepository.js';

class InMemoryWatchlistRepository extends WatchlistRepository {
  constructor() {
    super();
    this._storage = new Map();
  }

  save(watchlist) {
    this._storage.set(watchlist.watchlistId, watchlist);
  }

  findById(watchlistId) {
    return this._storage.get(watchlistId) || null;
  }

  findAll() {
    return Array.from(this._storage.values());
  }

  delete(watchlistId) {
    this._storage.delete(watchlistId);
  }
}

export default InMemoryWatchlistRepository;
