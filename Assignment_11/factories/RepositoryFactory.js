import InMemoryUserRepository from '../repositories/inmemory/InMemoryUserRepository.js';
import InMemoryMovieRepository from '../repositories/inmemory/InMemoryMovieRepository.js';
import InMemoryWatchlistRepository from '../repositories/inmemory/InMemoryWatchlistRepository.js';
import InMemoryReviewRepository from '../repositories/inmemory/InMemoryReviewRepository.js';

// Placeholder for future expansion
// import DatabaseUserRepository from '../repositories/database/DatabaseUserRepository.js';

class RepositoryFactory {
  static getUserRepository(type = 'MEMORY') {
    switch (type) {
      case 'MEMORY':
        return new InMemoryUserRepository();
      // case 'DATABASE':
      //   return new DatabaseUserRepository();
      default:
        throw new Error(`Unsupported storage type: ${type}`);
    }
  }

  static getMovieRepository(type = 'MEMORY') {
    switch (type) {
      case 'MEMORY':
        return new InMemoryMovieRepository();
      default:
        throw new Error(`Unsupported storage type: ${type}`);
    }
  }

  static getWatchlistRepository(type = 'MEMORY') {
    switch (type) {
      case 'MEMORY':
        return new InMemoryWatchlistRepository();
      default:
        throw new Error(`Unsupported storage type: ${type}`);
    }
  }

  static getReviewRepository(type = 'MEMORY') {
    switch (type) {
      case 'MEMORY':
        return new InMemoryReviewRepository();
      default:
        throw new Error(`Unsupported storage type: ${type}`);
    }
  }
}

export default RepositoryFactory;