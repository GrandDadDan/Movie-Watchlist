import UserRepository from '../interfaces/UserRepository.js';
import fs from 'fs/promises';

class FileSystemUserRepository extends UserRepository {
  constructor(filePath) {
    super();
    this._filePath = filePath;
  }

  async save(user) {
    const data = await this._loadAll();
    data[user.userId] = user;
    await fs.writeFile(this._filePath, JSON.stringify(data, null, 2));
  }

  async findById(userId) {
    const data = await this._loadAll();
    return data[userId] || null;
  }

  async findAll() {
    const data = await this._loadAll();
    return Object.values(data);
  }

  async delete(userId) {
    const data = await this._loadAll();
    delete data[userId];
    await fs.writeFile(this._filePath, JSON.stringify(data, null, 2));
  }

  async _loadAll() {
    try {
      const file = await fs.readFile(this._filePath, 'utf-8');
      return JSON.parse(file);
    } catch (err) {
      return {}; // File may not exist yet
    }
  }
}

export default FileSystemUserRepository;
