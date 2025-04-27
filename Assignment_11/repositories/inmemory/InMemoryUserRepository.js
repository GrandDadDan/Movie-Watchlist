import UserRepository from '../interfaces/UserRepository.js';

class InMemoryUserRepository extends UserRepository {
  constructor() {
    super();
    this._storage = new Map(); // can also use: this._storage = {};
  }

  save(user) {
    this._storage.set(user.userId, user);
  }

  findById(userId) {
    return this._storage.get(userId) || null;
  }

  findAll() {
    return Array.from(this._storage.values());
  }

  delete(userId) {
    this._storage.delete(userId);
  }
}

export default InMemoryUserRepository;
