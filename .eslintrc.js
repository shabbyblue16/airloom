module.exports = {
  extends: ['airbnb', 'airbnb/hooks', 'eslint:recommended', 'plugin:react/recommended'],
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  ignorePatterns: ['bundle.js'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'jsx-quotes': 'off',
    'no-unused-vars': 0,
    'react/require-default-props': 0,
    'no-console': 0,
  },
};
