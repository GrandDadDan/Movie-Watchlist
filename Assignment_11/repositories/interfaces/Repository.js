// Generic repository interface
class Repository {
  save(entity) {
    throw new Error("save() must be implemented");
  }

  findById(id) {
    throw new Error("findById() must be implemented");
  }

  findAll() {
    throw new Error("findAll() must be implemented");
  }

  delete(id) {
    throw new Error("delete() must be implemented");
  }
}

export default Repository;
