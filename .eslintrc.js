module.exports = {
  extends: [
    'react-app', // Create React App base settings
    'eslint:recommended', // recommended ESLint rules
    'plugin:@typescript-eslint/recommended', // recommended rules from @typescript-eslint/eslint-plugin
    'prettier', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with Prettier.
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier and eslint-config-prettier. This will display Prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  rules: {
    '@typescript-eslint/no-this-alias': 0,
    '@typescript-eslint/no-empty-function': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/*.stories.tsx',
          '**/*.spec.tsx',
          '**/*.mock.ts',
          'src/__mocks__/**',
          'config-overrides.js',
          'src/test-utils.tsx',
          'src/setupTests.ts',
        ],
      },
    ],
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: [
          'acc', // for reduce accumulators
          'accumulator', // for reduce accumulators
          'e', // for e.returnvalue
          'draft', // for Immer
          'staticContext', // for ReactRouter context
        ],
      },
    ],
    'prettier/prettier': [
      'error',
      {
        arrowParens: 'avoid',
      },
    ],
  },
};
