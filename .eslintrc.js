module.exports = {
  extends: ['eslint:recommended'],
  plugins: [],
  parserOptions: {
    ecmaVersion: 2017,
  },
  env: {
    node: true,
  },
  rules: {
    eqeqeq: 'error', // strict equals
  },
  settings: {},
}
