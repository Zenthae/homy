// import { Config } from 'jest';

// TODO: Replace by a monorepo config (projects) https://jestjs.io/docs/next/configuration#projects-arraystring--projectconfig
// ProjectConfig: https://github.com/facebook/jest/blob/cc5d630ec1cdbf8414ab78af800cb838d24ee63c/packages/jest-types/src/Config.ts#L302

module.exports = {
  verbose: true,
  projects: [
    {
      preset: 'ts-jest/presets/default-esm',
      globals: {
        'ts-jest': {
          useESM: true,
        },
      },
      testEnvironment: 'node',
      rootDir: './packages/zigbee',
      moduleNameMapper: {
        '@/': '<rootDir>/src/',
      },
    },
  ],
};

// export default config;
