module.exports = {
  env: {
    'jest/globals': true,
    browser: true,
  },
  extends: ['airbnb', 'airbnb/hooks'],
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['jest'],
  rules: {
    eqeqeq: 1,
    camelcase: 1,
    'import/no-unresolved': [1, { caseSensitive: false }],
    'react/prop-types': 2,
    'arrow-body-style': 0,
    // 'import/prefer-default-export': 0,
    // 'no-undef': 0, // enable
    // 'no-unused-vars': 0,
    'no-nested-ternary': 0,
    'react/forbid-prop-types': 1,
    'react/jsx-curly-brace-presence': 0,
    'react/jsx-one-expression-per-line': 0,
    // 'react-hooks/exhaustive-deps': 0,
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/prefer-to-have-length': 'warn',
    'jest/valid-expect': 'error',
    'react/no-array-index-key': 0,
    'react-hooks/exhaustive-deps': 1,
    'comma-dangle': 1,
    'jsx-a11y/click-events-have-key-events': 1,
    'jsx-a11y/no-static-element-interactions': 1,
    'no-unused-vars': 1,
    'no-void': 0,
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: './client/webpack.config.js',
      },
    },
  },
};
