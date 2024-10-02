module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  parser: 'babel-eslint', // Add this line to use the Babel parser
  extends: [
    '@react-native',        
    'eslint:recommended',   
    'plugin:react/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  rules: {
    // Your custom ESLint rules go here
  },
};
