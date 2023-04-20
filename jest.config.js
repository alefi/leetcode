module.exports = {
  moduleFileExtensions: ['js', 'json', 'ts'],
  preset: 'ts-jest',
  rootDir: '.',
  testPathIgnorePatterns: ['/node_modules/', '/test/'],
  testRegex: '.*\\.spec\\.ts$',
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        tsconfig: '<rootDir>/tsconfig.test.json',
      },
    ],
  },
  collectCoverageFrom: ['**/*.ts'],
  coverageDirectory: './coverage',
  testEnvironment: 'node',
};
