import InMemoryUserRepository from "../../repositories/inmemory/InMemoryUserRepository.js";

const fakeUser = { userId: "u001", name: "Dan", email: "dan@email.com" };

test("should save and find user by ID", () => {
  const repo = new InMemoryUserRepository();
  repo.save(fakeUser);

  const found = repo.findById("u001");
  expect(found).toEqual(fakeUser);
});

test("should return all users", () => {
  const repo = new InMemoryUserRepository();
  repo.save(fakeUser);

  const allUsers = repo.findAll();
  expect(allUsers).toContain(fakeUser);
});

test("should delete user by ID", () => {
  const repo = new InMemoryUserRepository();
  repo.save(fakeUser);
  repo.delete("u001");

  const deleted = repo.findById("u001");
  expect(deleted).toBeNull();
});
