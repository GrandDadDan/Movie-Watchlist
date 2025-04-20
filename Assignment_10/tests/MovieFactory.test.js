import MovieFactory from '../creational_patterns/simple_factory/MovieFactory.js';

test('should create a documentary movie', () => {
  const doc = MovieFactory.createMovie('documentary', 'Planet Earth');
  expect(doc.genre).toBe('Documentary');
  expect(doc.title).toBe('Planet Earth');
});

test('should fallback to general movie if type is unknown', () => {
  const generic = MovieFactory.createMovie('unknown', 'Generic Movie');
  expect(generic.genre).toBe('General');
});
