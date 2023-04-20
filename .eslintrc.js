module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier',
  ],
  ignorePatterns: ['.eslintrc.js', 'jest.config.js'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['./tsconfig.eslint.json'],
  },
  plugins: [
    'jest',
    'prettier', // It is mentioned in the plugins to have to get able the initial code formatting.
    '@typescript-eslint',
  ],
  rules: {
    'prettier/prettier': ['error', require('./.prettierrc')],
  },
  root: true,
};
