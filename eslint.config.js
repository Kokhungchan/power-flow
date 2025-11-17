// eslint.config.js

import { defineConfig } from 'eslint/config';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';

// 1. Import the actual Prettier configuration objects
import prettierConfig from 'eslint-config-prettier';
import eslintPluginPrettier from 'eslint-plugin-prettier/recommended'; // Recommended way to include the plugin in flat config

const compat = new FlatCompat({
  baseDirectory: new URL('.', import.meta.url).pathname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default defineConfig([
  // 2. Start with the recommended base configs
  js.configs.recommended,
  ...compat.extends('eslint:recommended'), // Still useful for compatibility if you have other legacy configs

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
    // 3. Keep project-specific rules here
    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'off',
      'no-undef': 'off',
    },
  },

  // 4. Add Prettier integration as the LAST item (it should override conflicting rules)
  // This array combines the two core Prettier needs:
  // a) Disabling conflicting rules (from eslint-config-prettier)
  // b) Running Prettier as a rule (from eslint-plugin-prettier/recommended)
  prettierConfig,
  eslintPluginPrettier,
]);
