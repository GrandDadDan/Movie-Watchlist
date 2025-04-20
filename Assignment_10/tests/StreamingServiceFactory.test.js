import StreamingServiceFactory from '../creational_patterns/abstract_factory/StreamingServiceFactory.js';

test('should return Netflix streaming object', () => {
  const platform = StreamingServiceFactory.getStreamingPlatform('netflix');
  expect(platform.stream()).toBe('Streaming from Netflix');
});

