export default {
    transform: {},
    testEnvironment: 'node',
    testMatch: ['**/?(*.)+(spec|test).mjs'],
    moduleNameMapper: {
      '^(\\.{1,2}/.*)\\.js$': '$1',
    },
};
