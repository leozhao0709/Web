const basicConfig = require('./jest.config.basic.js');

module.exports = {
  ...basicConfig,
  setupFilesAfterEnv: ['./jest.setup.ts'],
};
