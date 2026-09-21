module.exports = {
  root: true,
  extends: ['eslint:recommended'],
  plugins: ['html'],
  settings: { 'html/html-extensions': ['.ux'] },
  parserOptions: { ecmaVersion: 2022, sourceType: 'module' },
  env: { es2021: true },
  globals: { console: 'readonly', setTimeout: 'readonly', clearTimeout: 'readonly' },
  overrides: [{ files: ['scripts/**', 'tests/**'], env: { node: true } }]
}
