module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['next/core-web-vitals', 'airbnb', 'prettier'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    semi: ['error', 'never'],
    'react/no-unknown-property': ['off'],
    'react/react-in-jsx-scope': ['off'],
    'react/jsx-filename-extension': ['off'],
    'react/function-component-definition': ['off'],
    'react/require-default-props': ['off'],
    'react/jsx-props-no-spreading': ['off'],
    'react/forbid-prop-types': ['off'],
  },
}
