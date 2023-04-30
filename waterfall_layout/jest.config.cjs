const basicConfig = require('./jest.config.basic.cjs');

module.exports = {
  ...basicConfig,
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['./jest.setup.ts'],
};
