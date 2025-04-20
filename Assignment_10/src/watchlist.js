class Watchlist {
  constructor(watchlistId, name, isShared = false, visibility = 'private', ownerId) {
    this.watchlistId = watchlistId;
    this.name = name;
    this.isShared = isShared;
    this.visibility = visibility;
    this.ownerId = ownerId;
    this.movies = [];
  }

  addMovie(movie) {
    if (this.movies.includes(movie)) {
      throw new Error('Movie already in watchlist.');
    }
    this.movies.push(movie);
  }

  removeMovie(movie) {
    this.movies = this.movies.filter(m => m !== movie);
  }

  shareLink() {
    this.isShared = true;
    return `https://watchlist.app/shared/${this.watchlistId}`;
  }

  categorizeMovie(movie, category) {
    movie.category = category; // Example extension for categorization
  }
}

export default Watchlist;
