module.exports = {
  env: {
    browser: true,
    es2023: true,
  },
  extends: [
    'plugin:vue/essential',
    './node_modules/eslint-config-airbnb-base/rules/best-practices.js',
    './node_modules/eslint-config-airbnb-base/rules/errors.js',
    './node_modules/eslint-config-airbnb-base/rules/es6.js',
    './node_modules/eslint-config-airbnb-base/rules/imports.js',
    './node_modules/eslint-config-airbnb-base/rules/node.js',
    // './node_modules/eslint-config-airbnb-base/rules/strict.js',
    './node_modules/eslint-config-airbnb-base/rules/style.js',
    './node_modules/eslint-config-airbnb-base/rules/variables.js',
  ],
  plugins: [
    'vue',
  ],
  parserOptions: {
    ecmaVersion: 2023,
    sourceType: 'module',
    parser: require.resolve('@typescript-eslint/parser'),
    extraFileExtensions: ['.vue'],
  },
  rules: {
    'no-undef': 'off',
    'vue/multi-word-component-names': 'off',
    'no-unused-vars': 'warn',
    'space-infix-ops': 'off',
  },
};
