module.exports = {
  extends: ['eslint:recommended'],
  plugins: [],
  parserOptions: {
    ecmaVersion: 6,
  },
  env: {
    node: true,
  },
  rules: {
    'no-console': 'warn',
    eqeqeq: 'error', // strict equals
  },
  settings: {},
}
