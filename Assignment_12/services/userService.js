import UserRepository from '../../Assignment_11/repositories/inmemory/InMemoryUserRepository.js';

class UserService {
    constructor() {
        this.userRepo = new UserRepository();
    }

    async authenticateUser(email, password) {
        const user = await this.userRepo.getByEmail(email);
        if (!user || user.password !== password) {
            throw new Error('Invalid credentials');
        }
        return user;
    }

    async createUser(userData) {
        return await this.userRepo.create(userData);
    }
}

export default UserService;
