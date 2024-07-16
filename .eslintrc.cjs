module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'unused-imports'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'semi': ['error', 'always'], // Enforce semicolons
    'quotes': ['error', 'single'], // Enforce single quotes
    'indent': ['error', 2], // Enforce 2-space indentation
    'no-console': 'warn', // Warn on console usage
    'eqeqeq': ['error', 'always'], // Enforce strict equality
    'curly': ['error', 'all'], // Enforce consistent brace style for all control statements
    '@typescript-eslint/no-explicit-any': 'off', // Disable no-explicit-any rule for TypeScript
    '@typescript-eslint/explicit-module-boundary-types': 'off', // Disable explicit return type rule for TypeScript

    // Unused imports and variables
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: 'React',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
  },
}
