module.exports = {
  root: true, // 親ディレクトリの設定ファイルを読み込まないように設定
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'standard',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: [
    'vue',
    '@typescript-eslint',
  ],
  rules: {
    'no-use-before-define': 'off', // import React from 'react' のエラー回避
    '@typescript-eslint/no-use-before-define': ['error', { "variables": false }],
    'camelCase': 'off',
    'space-before-function-paren': 'off',
    'vue/no-deprecated-slot-attribute': 2,
    'vue/no-deprecated-scope-attribute': 2,
    'vue/no-deprecated-slot-scope-attribute': 2,
    'vue/no-deprecated-filter': 2,
    'vue/no-deprecated-v-bind-sync': 2,
    'vue/no-deprecated-v-on-number-modifiers': 2,
    'vue/no-deprecated-events-api': 2,
    'vue/no-deprecated-functional-template': 2,
    'vue/no-deprecated-html-element-is': 2,
    'vue/no-deprecated-vue-config-keycodes': 2,
    'vue/no-deprecated-dollar-listeners-api': 2,
    'vue/no-deprecated-v-on-native-modifier': 2,
    'vue/no-deprecated-dollar-scopedslots-api': 2,
  },
  settings: {
    vue: {
      version: 'detect'
    }
  }
}

