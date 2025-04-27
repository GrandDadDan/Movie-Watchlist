import MovieRepository from '../interfaces/MovieRepository.js';

class InMemoryMovieRepository extends MovieRepository {
  constructor() {
    super();
    this._storage = new Map();
  }

  save(movie) {
    this._storage.set(movie.movieId, movie);
  }

  findById(movieId) {
    return this._storage.get(movieId) || null;
  }

  findAll() {
    return Array.from(this._storage.values());
  }

  delete(movieId) {
    this._storage.delete(movieId);
  }
}

export default InMemoryMovieRepository;
