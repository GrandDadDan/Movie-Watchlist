import dbInstance, {
  DatabaseConnection,
} from "../creational_patterns/singleton/DatabaseConnection.js";

test("returns same instance", () => {
  const a = new DatabaseConnection();
  const b = new DatabaseConnection();
  expect(a).toBe(b);
  expect(a.connectionId).toBe(b.connectionId);
});
