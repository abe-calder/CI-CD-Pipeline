import globals from 'globals';
import tseslint from 'typescript-eslint';
import eslintReact from '@eslint-react/eslint-plugin';
// import pluginReactHooks from 'eslint-plugin-react-hooks';
// import pluginReactRefresh from 'eslint-plugin-react-refresh';
import eslintConfigPrettier from 'eslint-config-prettier';

export default [
  { ignores: ['dist', 'node_modules'] },
  ...tseslint.configs.recommended,
  eslintReact.configs.all, // Use the all-in-one config
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  eslintConfigPrettier,
];
