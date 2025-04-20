import MoviePrototype from '../creational_patterns/prototype/MoviePrototype.js';

test('should clone movie with same attributes', () => {
  const original = new MoviePrototype('Interstellar', 'Sci-Fi', 9);
  const clone = original.clone();
  expect(clone.title).toBe('Interstellar');
  expect(clone.genre).toBe('Sci-Fi');
  expect(clone.rating).toBe(9);
});
