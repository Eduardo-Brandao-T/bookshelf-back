module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['tsconfig.json'],
    tsconfigRootDir: __dirname,
  },
  plugins: ['@typescript-eslint', 'prettier', 'simple-import-sort'],
  extends: ['plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
  rules: {
    // Prettier
    'prettier/prettier': 'error',

    // Importação organizada
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',

    // Código limpo
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/explicit-function-return-type': 'off',
    'no-trailing-spaces': 'warn',
    '@typescript-eslint/no-explicit-any': 'warn',
    'no-shadow': 'error',

    // Estilo
    'no-console': 'warn', // alerta quando usa console.log
    'prefer-const': 'error', // obriga usar const se não há reatribuição
    'object-curly-spacing': ['error', 'always'],
    'comma-dangle': ['error', 'always-multiline'],
  },
};
