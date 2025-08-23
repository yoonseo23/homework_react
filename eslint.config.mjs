import js from '@eslint/js'
import pluginReact from 'eslint-plugin-react'
import { defineConfig, globalIgnores } from 'eslint/config'
import globals from 'globals'
import pluginJsxA11y from 'eslint-plugin-jsx-a11y'
import pluginReactHooks from 'eslint-plugin-react-hooks'

export default defineConfig([

  globalIgnores(['dist']),
  {
    files: ['src/**/*.{js,jsx}'],
    plugins: { js },
    extends: ['js/recommended'],
    settings: {
      react: {
        version: 'detect',
      },
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  pluginReact.configs.flat['jsx-runtime'],
  pluginJsxA11y.flatConfigs.recommended,
  pluginReactHooks.configs['recommended-latest'],
  eslintPluginPrettierRecommended,
  {
    rules: {
      'no-undef': 'error',
      'no-var': 'error',
      'prefer-const': 'error',
      'no-unused-vars': [
        'error',
        { varsIgnorePattern: '^[A-Z_]', argsIgnorePattern: '^_' },
      ],
      'no-duplicate-imports': 'error',
      'react/jsx-no-undef': 'error',
      'arrow-body-style': ['error', 'as-needed'],
      'no-console': ['warn', { allow: ['warn', 'error'] }],
    },
  },
])