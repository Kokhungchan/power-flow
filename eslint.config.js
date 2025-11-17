// eslint.config.js

import { defineConfig } from 'eslint/config';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';

// 1. Import the actual Prettier configuration objects
import prettierConfig from 'eslint-config-prettier';
import eslintPluginPrettier from 'eslint-plugin-prettier/recommended';

const compat = new FlatCompat({
  baseDirectory: new URL('.', import.meta.url).pathname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default defineConfig([
  // 2. Start with the recommended base configs
  js.configs.recommended,
  ...compat.extends('eslint:recommended'),

  {
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      globals: {
        document: 'readonly',
        fetch: 'readonly',
        console: 'readonly',
        customElements: 'readonly',
        HTMLElement: 'readonly',
      },
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'off',
      'no-undef': 'off',
    },
  },
  prettierConfig,
  eslintPluginPrettier,
]);
