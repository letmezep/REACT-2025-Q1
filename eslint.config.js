import next from '@next/eslint-plugin-next';
import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import react from 'eslint-plugin-react';
import tseslint from 'typescript-eslint';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import reactCompiler from 'eslint-plugin-react-compiler';

export default [
  {
    ignores: ['dist', 'coverage'],
  },
  {
    files: ['**/*.{ts,tsx,js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      '@next/next': next,
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'react-compiler': reactCompiler,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...tseslint.configs.strict.rules,
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,
      'react/react-in-jsx-scope': 'off',
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'react-compiler/react-compiler': 'error',
      'react/prop-types': 'off',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  eslintPluginPrettier.configs.recommended,
  next.configs.recommended,
  next.configs['core-web-vitals'],
];

// import js from '@eslint/js';
// import globals from 'globals';
// import reactHooks from 'eslint-plugin-react-hooks';
// import reactRefresh from 'eslint-plugin-react-refresh';
// import react from 'eslint-plugin-react';
// import tseslint from 'typescript-eslint';
// import eslintPluginPrettier from 'eslint-plugin-prettier/recommended';
// import reactCompiler from 'eslint-plugin-react-compiler';

// export default tseslint.config(
//   { ignores: ['dist', 'coverage'] },
//   {
//     extends: [
//       next,
//       next/core-web-vitals,
//       js.configs.recommended,
//       ...tseslint.configs.strict,
//       eslintPluginPrettier,
//     ],
//     files: ['**/*.{ts,tsx}'],
//     languageOptions: {
//       ecmaVersion: 2020,
//       globals: globals.browser,
//     },
//     plugins: {
//       react,
//       'react-hooks': reactHooks,
//       'react-refresh': reactRefresh,
//       'react-compiler': reactCompiler,
//     },
//     rules: {
//       'react/react-in-jsx-scope': 'off',
//       ...reactHooks.configs.recommended.rules,
//       'react-refresh/only-export-components': [
//         'warn',
//         { allowConstantExport: true },
//       ],
//       'react-compiler/react-compiler': 'error',
//       ...react.configs.recommended.rules,
//       ...react.configs['jsx-runtime'].rules,
//       'react/prop-types': 'off',
//     },
//     settings: {
//       react: {
//         version: 'detect',
//       },
//     },
//   }
// );
