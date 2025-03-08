import js from '@eslint/js';
import globals from 'globals';
import next from '@next/eslint-plugin-next';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import react from 'eslint-plugin-react';
import reactCompiler from 'eslint-plugin-react-compiler';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsparser from '@typescript-eslint/parser';

export default [
  {
    ignores: [
      'dist',
      'coverage',
      'node_modules',
      '.next',
      '.husky',
      ',netlify',
      'src',
    ],
  },
  {
    files: ['**/*.{ts,tsx,js,jsx}'],
    languageOptions: {
      parser: tsparser,
      parserOptions: {
        project: './tsconfig.json',
        sourceType: 'module',
      },
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      '@next/next': next,
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'react-compiler': reactCompiler,
      '@typescript-eslint': tseslint,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...tseslint.configs.strict.rules,
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_' },
      ],
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
  // {
  //   // files: ['**/*.{ts,tsx,js,jsx}'],
  //   files: ['components/**/*.{ts,tsx,js}', 'pages/**/*.{ts,tsx,js,jsx}'],
  //   languageOptions: {
  //     ecmaVersion: 'latest',
  //     sourceType: 'module',
  //     globals: globals.browser,
  //     parser: tseslint.parser,
  //     parserOptions: {
  //       project: './tsconfig.json',
  //       sourceType: 'module',
  //     },
  //   },
  //   plugins: {
  //     '@next/next': next,
  //     react,
  //     'react-hooks': reactHooks,
  //     'react-refresh': reactRefresh,
  //     'react-compiler': reactCompiler,
  //     prettier: eslintPluginPrettier,
  //   },
  //   rules: {
  //     ...js.configs.recommended.rules,
  //     ...tseslint.configs.strict.rules,
  //     ...react.configs.recommended.rules,
  //     ...react.configs['jsx-runtime'].rules,
  //     ...reactHooks.configs.recommended.rules,
  //     '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],

  //     'react/react-in-jsx-scope': 'off',
  //     'react-refresh/only-export-components': [
  //       'warn',
  //       { allowConstantExport: true },
  //     ],
  //     'react-compiler/react-compiler': 'error',
  //     'react/prop-types': 'off',
  //     'prettier/prettier': 'error',
  //   },
  //   settings: {
  //     react: {
  //       version: 'detect',
  //     },
  //   },
  // },
];

// import next from '@next/eslint-plugin-next';
// import js from '@eslint/js';
// import globals from 'globals';
// import reactHooks from 'eslint-plugin-react-hooks';
// import reactRefresh from 'eslint-plugin-react-refresh';
// import react from 'eslint-plugin-react';
// import tseslint from 'typescript-eslint';
// import eslintPluginPrettier from 'eslint-plugin-prettier';
// import reactCompiler from 'eslint-plugin-react-compiler';

// export default [
//   {
//     ignores: ['dist', 'coverage'],
//   },
//   {
//     files: ['**/*.{ts,tsx,js,jsx}'],
//     languageOptions: {
//       ecmaVersion: 2020,
//       globals: globals.browser,
//     },
//     plugins: {
//       '@next/next': next,
//       react,
//       'react-hooks': reactHooks,
//       'react-refresh': reactRefresh,
//       'react-compiler': reactCompiler,
//     },
//     rules: {
//       ...js.configs.recommended.rules,
//       ...tseslint.configs.strict.rules,
//       ...react.configs.recommended.rules,
//       ...react.configs['jsx-runtime'].rules,
//       ...reactHooks.configs.recommended.rules,
//       'react/react-in-jsx-scope': 'off',
//       'react-refresh/only-export-components': [
//         'warn',
//         { allowConstantExport: true },
//       ],
//       'react-compiler/react-compiler': 'error',
//       'react/prop-types': 'off',
//     },
//     settings: {
//       react: {
//         version: 'detect',
//       },
//     },
//   },
//   eslintPluginPrettier.configs.recommended,
//   next.configs.recommended,
//   next.configs['core-web-vitals'],
// ];
