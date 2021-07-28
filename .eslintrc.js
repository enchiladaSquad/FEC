/**
 * These rules enforce Hack Reactor's style guide.
 * Visit this repo for more information:
 *   https://github.com/reactorcore/eslint-config-hackreactor
 */

module.exports = {
  extends: ['airbnb', 'airbnb/hooks'],
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    eqeqeq: 1,
    camelcase: 1,
    'import/no-unresolved': [1, { caseSensitive: false }],
    'react/prop-types': 2,
    'import/prefer-default-export': 1,
    'react/forbid-prop-types': 0,
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: './client/webpack.config.js',
      },
    },
  },
};
