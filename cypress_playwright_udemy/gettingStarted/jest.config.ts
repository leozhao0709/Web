import { Config } from 'jest';
import commonConfig from './jest.common';
import { merge } from 'webpack-merge';

const config: Config = merge(commonConfig, {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['./jest.setup.ts'],
  moduleNameMapper: {
    [`^@app/(.*)`]: '<rootDir>/src/$1',
  },
  testMatch: [
    '<rootDir>/src/**/*.spec.(js|jsx|ts|tsx)',
    '<rootDir>/tests/**/*.(test|spec).(js|jsx|ts|tsx)',
  ],
});

export default config;
