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
};
