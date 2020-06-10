module.exports = {
  root: true,
  plugins: ['react', '@typescript-eslint', 'prettier', 'jsx-a11y', 'cypress'],
  extends: [
    'plugin:react/recommended',
    'airbnb-typescript',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:cypress/recommended',
    'plugin:jsx-a11y/recommended',
    'prettier',
  ],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json', './cypress/tsconfig.json'],  /* TODO: Fully support cypress */
  },
  rules: {
    'max-len': ['error', { code: 140 }],
    "@typescript-eslint/explicit-function-return-type": "off",
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['**/*.stories.tsx', '**/*.test.ts', 'cypress/**'],
      },
    ],
  },
  overrides: [
    {
      "files": ["*.ts", "*.tsx"],
      "rules": {
        "@typescript-eslint/explicit-function-return-type": ["error"]
      }
    },
    {
      "files": ["*.js"],
      "rules": {
        "@typescript-eslint/no-var-requires": "off"
      }
    }
  ]
};
