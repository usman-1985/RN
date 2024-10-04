module.exports = {
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false, // Optional: if you don't have a Babel config
    ecmaVersion: 2020, // Use the version you are using
    sourceType: 'module', // Use 'module' for ES modules
  },
  // Add your ESLint rules and other configurations here
  rules: {
    // Example rules
    'react/react-in-jsx-scope': 'off', // If you are using React 17+
  },
};
