module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.css$': 'jest-transform-stub',
  },
  moduleNameMapper: {
    '\\.(css|less)$': 'jest-transform-stub',
  },
  collectCoverage: true,
  collectCoverageFrom: [
    '**/*.tsx',
    '!vite.config.ts',
    '!vite-env.d.ts',
    '!**/node_modules/**',
    '!src/**/*.test.ts',
    '!src/**/*.test.tsx',
    '!src/App.tsx',
  ],
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: ['/node_modules/', '/coverage/'],
};
