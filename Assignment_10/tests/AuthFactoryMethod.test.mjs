import AuthFactory from '../creational_patterns/factory_method/AuthFactoryMethod.js';

test('should return Google auth handler', () => {
  const handler = AuthFactory.getAuthHandler('google');
  expect(handler.authenticate()).toBe('Authenticating via Google');
});

test('should throw error on invalid handler type', () => {
  expect(() => AuthFactory.getAuthHandler('twitter')).toThrow();
});

