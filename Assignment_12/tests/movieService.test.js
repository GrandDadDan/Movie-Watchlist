import MovieService from '/movieService.js';
import MovieRepository from '../repositories/movieRepository.js';

jest.mock('../repositories/movieRepository.js');  // Mock the MovieRepository

describe('MovieService', () => {
    let movieService;
    let mockMovieRepo;

    beforeEach(() => {
        mockMovieRepo = new MovieRepository();
        movieService = new MovieService();
    });

    test('should checkout a movie successfully', async () => {
        const mockMovie = { id: '1', title: 'Inception', checkedOut: false };
        mockMovieRepo.getById = jest.fn().mockResolvedValue(mockMovie);  // Mock the repository method
        mockMovieRepo.update = jest.fn().mockResolvedValue({ ...mockMovie, checkedOut: true });

        const result = await movieService.checkoutMovie('1');

        expect(result.checkedOut).toBe(true);
        expect(mockMovieRepo.getById).toHaveBeenCalledWith('1');
        expect(mockMovieRepo.update).toHaveBeenCalledWith('1', { ...mockMovie, checkedOut: true });
    });

    test('should throw an error if the movie is already checked out', async () => {
        const mockMovie = { id: '1', title: 'Inception', checkedOut: true };
        mockMovieRepo.getById = jest.fn().mockResolvedValue(mockMovie);

        await expect(movieService.checkoutMovie('1')).rejects.toThrow('Movie already checked out');
    });

    test('should throw an error if the movie is not found', async () => {
        mockMovieRepo.getById = jest.fn().mockResolvedValue(null);  // No movie found

        await expect(movieService.checkoutMovie('nonexistentId')).rejects.toThrow('Movie not found');
    });
});
