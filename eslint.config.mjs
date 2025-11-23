import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { fixupConfigRules } from '@eslint/compat';
import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import tsParser from '@typescript-eslint/parser';
import checkFile from 'eslint-plugin-check-file';
import globals from 'globals';

// ⬇ NEW: import the plugin directly (ESM), do NOT use compat preset
import betterTailwind from 'eslint-plugin-better-tailwindcss';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
	baseDirectory: __dirname,
	recommendedConfig: js.configs.recommended,
	allConfig: js.configs.all,
});

export default [
	{
		ignores: ['node_modules/*', 'public/mockServiceWorker.js', 'generators/*'],
	},

	...compat.extends('eslint:recommended'),

	{
		plugins: {
			'check-file': checkFile,

			'better-tailwindcss': betterTailwind,
		},

		languageOptions: {
			globals: {
				...globals.node,
			},
			ecmaVersion: 'latest',
			sourceType: 'module',
		},
	},

	...fixupConfigRules(
		compat.extends(
			'eslint:recommended',
			'plugin:import/errors',
			'plugin:import/warnings',
			'plugin:import/typescript',
			'plugin:@typescript-eslint/recommended',
			'plugin:react/recommended',
			'plugin:react-hooks/recommended',
			'plugin:jsx-a11y/recommended',
			'plugin:prettier/recommended',
			'plugin:jest-dom/recommended',
			'plugin:vitest/legacy-recommended',
			// 'plugin:better-tailwindcss/recommended'
		),
	).map((config) => ({
		...config,
		files: ['**/*.ts', '**/*.tsx'],
	})),

	{
		files: ['**/*.ts', '**/*.tsx'],

		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node,
			},
			parser: tsParser,
		},

		settings: {
			react: { version: 'detect' },
			'import/resolver': { typescript: {} },

			// Tailwind plugin settings
			'better-tailwindcss': {
				entryPoint: './src/index.css',
				mode: 'v4',
			},
		},

		rules: {
			'import/no-restricted-paths': [
				'error',
				{
					zones: [
						{ target: './src/entities', from: ['./src/features', './src/widgets', './src/pages'] },
						{ target: './src/features', from: ['./src/widgets', './src/pages'] },
						{ target: './src/widgets', from: ['./src/pages'] },
					],
				},
			],

			'import/no-cycle': 'error',
			'linebreak-style': ['off', 'unix'],
			'react/prop-types': 'off',
			endOfLine: 'off',

			'import/default': 'off',
			'import/no-named-as-default-member': 'off',
			'import/no-named-as-default': 'off',
			'react/react-in-jsx-scope': 'off',
			'jsx-a11y/anchor-is-valid': 'off',
			'@typescript-eslint/no-unused-vars': ['warn'],
			'@typescript-eslint/explicit-function-return-type': ['off'],
			'@typescript-eslint/explicit-module-boundary-types': ['off'],
			'@typescript-eslint/no-empty-function': ['off'],
			'@typescript-eslint/no-explicit-any': ['off'],

			'prettier/prettier': [
				'warn',
				{},
				{ usePrettierrc: true },
			],

			'check-file/filename-naming-convention': [
				'error',
				{ '**/*.{ts,tsx}': 'KEBAB_CASE' },
				{ ignoreMiddleExtensions: true },
			],

			'better-tailwindcss/enforce-consistent-line-wrapping': 'off',
			//'better-tailwindcss/no-deprecated-utilities': 'warn',
		},
	},

	{
		files: ['src/**/!(__tests__)/*'],
		plugins: { 'check-file': checkFile },
		rules: {
			'check-file/folder-naming-convention': [
				'error',
				{ '**/*': 'KEBAB_CASE' },
			],
		},
	},
];
