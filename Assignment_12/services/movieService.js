import MovieRepository from '../../Assignment_11/repositories/inmemory/InMemoryMovieRepository.js';

class MovieService {
    constructor() {
        this.movieRepo = new MovieRepository();
    }

    async getAllMovies() {
        return await this.movieRepo.getAll();
    }

    async getMovieById(movieId) {
        return await this.movieRepo.getById(movieId);
    }

    async createMovie(movieData) {
        return await this.movieRepo.create(movieData);
    }

    async updateMovie(movieId, updatedData) {
        return await this.movieRepo.update(movieId, updatedData);
    }

    async checkoutMovie(movieId) {
        const movie = await this.movieRepo.getById(movieId);
        if (!movie) {
            throw new Error('Movie not found');
        }
        if (movie.checkedOut) {
            throw new Error('Movie already checked out');
        }
        movie.checkedOut = true;
        return await this.movieRepo.update(movieId, movie);
    }
}

export default MovieService;
