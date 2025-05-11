export class InMemoryMovieRepository {
  constructor() {
    this.movies = new Map();
  }

  save(movie) {
    this.movies.set(movie.id, movie);
    return movie;
  }

  findById(id) {
    return this.movies.get(id);
  }

  findAll() {
    return Array.from(this.movies.values());
  }

  delete(id) {
    this.movies.delete(id);
  }
}
