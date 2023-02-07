const basicConfig = require('./jest.config.basic.js');

module.exports = {
  ...basicConfig,
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['./jest.setup.ts'],
};
