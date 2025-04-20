class Watchlist {
  constructor() {
    this.name = '';
    this.isShared = false;
    this.movies = [];
  }
}

class WatchlistBuilder {
  constructor() {
    this.watchlist = new Watchlist();
  }

  setName(name) {
    this.watchlist.name = name;
    return this;
  }

  setShared(shared = true) {
    this.watchlist.isShared = shared;
    return this;
  }

  addMovie(movie) {
    this.watchlist.movies.push(movie);
    return this;
  }

  build() {
    return this.watchlist;
  }
}

export default WatchlistBuilder;
