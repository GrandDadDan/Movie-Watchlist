
import db1 from '../creational_patterns/singleton/DatabaseConnection.js';
import db2 from '../creational_patterns/singleton/DatabaseConnection.js';

test('should return the same instance', () => {
  expect(db1).toBe(db2);
  expect(db1.query('SELECT 1')).toMatch(/Executing:/);
});
