import ReviewRepository from '../interfaces/ReviewRepository.js';

class InMemoryReviewRepository extends ReviewRepository {
  constructor() {
    super();
    this._storage = new Map();
  }

  save(review) {
    this._storage.set(review.reviewId, review);
  }

  findById(reviewId) {
    return this._storage.get(reviewId) || null;
  }

  findAll() {
    return Array.from(this._storage.values());
  }

  delete(reviewId) {
    this._storage.delete(reviewId);
  }
}

export default InMemoryReviewRepository;
