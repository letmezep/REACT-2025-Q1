// import { defaults } from 'jest-config';

// export default {
//   setupFilesAfterEnv: ['<rootDir>/jest.setup.mjs'],
//   testEnvironment: 'jsdom',
//   moduleNameMapper: {
//     '^@/(.*)$': '<rootDir>/$1',
//     '\\.(css|less|scss|sass)$': 'identity-obj-proxy', // Мок для CSS
//   },
//   transform: {
//     '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest', // Babel для транспиляции
//   },
// };

module.exports = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.cjs'],
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },
};

// // const nextJest = require('next/jest');
// // require('@testing-library/jest-dom');
// // global.expect = require('expect');
// // import nextJest from 'next/jest';
// // const { expect } = require('@jest/globals');
// // require('@testing-library/jest-dom');

// // const createJestConfig = nextJest({
// //   dir: './',
// // });

// // const customJestConfig = {
// //   setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
// //   testEnvironment: 'jest-environment-jsdom',
// //   moduleDirectories: ['node_modules', '<rootDir>/'],
// //   collectCoverage: true,
// //   collectCoverageFrom: [
// //     "components/*.tsx",
// //     "pages/*.tsx",
// //     "!**/*.ts",
// //     "!**/*.test.tsx",
// //     "!/node_modules/",
// //   ],
// //   coverageDirectory: "coverage",
// //   coverageReporters: ["text", "lcov"],
// // };

// // module.exports = createJestConfig(customJestConfig);

// require('@testing-library/jest-dom');
// module.exports = {
//   setupFilesAfterEnv: ['<rootDir>/jest.setup.cjs'],
//   testEnvironment: 'jsdom',
// };
// // import nextJest from 'next/jest.js';

// // const createJestConfig = nextJest({
// //   dir: './',
// // });

// // const customJestConfig = {
// //   setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
// //   moduleDirectories: ['node_modules', '<rootDir>/'],
// //   testEnvironment: 'jest-environment-jsdom',
// //   collectCoverage: true,
// //   collectCoverageFrom: [
// //     "/*.tsx",
// //     "!/*.ts",
// //     "!vite.config.ts",
// //     "!vite-env.d.ts",
// //     "!/node_modules/",
// //     "!/*.test.tsx",
// //     "!/index.ts",
// //   ],
// //   coverageDirectory: "coverage",
// //   coverageReporters: ["text", "lcov"],
// // };

// // export default createJestConfig(customJestConfig);

// // // import nextJest from 'next/jest.js';
// // // // const nextJest = require('next/jest.js');

// // // const createJestConfig = nextJest({
// // //   dir: './',
// // // });

// // // const customJestConfig = {
// // //   setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
// // //   moduleDirectories: ['node_modules', '<rootDir>/'],
// // //   testEnvironment: 'jest-environment-jsdom',
// // // };

// // // module.exports = {
// // //   collectCoverage: true,
// // //   collectCoverageFrom: [
// // //     "**/*.tsx",
// // //     "!**/*.ts",
// // //     "!vite.config.ts",
// // //     "!vite-env.d.ts",
// // //     "!**/node_modules/**",
// // //     "!**/*.test.tsx",
// // //     "!**/index.ts",
// // //   ],
// // //   coverageDirectory: "coverage",
// // //   coverageReporters: ["text", "lcov"],
// // //   testEnvironment: "jsdom",
// // // };

// // // export default createJestConfig(customJestConfig);
