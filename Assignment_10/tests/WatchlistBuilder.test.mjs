import WatchlistBuilder from '../creational_patterns/builder/WatchlistBuilder.js';

test('should build a watchlist with name and movies', () => {
  const watchlist = new WatchlistBuilder()
    .setName('My List')
    .addMovie('Inception')
    .setShared(true)
    .build();

  expect(watchlist.name).toBe('My List');
  expect(watchlist.isShared).toBe(true);
  expect(watchlist.movies).toContain('Inception');
});

test('should return empty list by default', () => {
  const watchlist = new WatchlistBuilder().build();
  expect(watchlist.movies.length).toBe(0);
});

