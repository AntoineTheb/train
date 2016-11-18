module.exports = {
  "env": {
    "es6": true,
    "node": true
  },
  "extends": "eslint:recommended",
  "parserOptions": {
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
    },
    "sourceType": "module"
  },
  "rules": {
    "indent": [2, 2],
    "quotes": ["error","single"],
    "semi": ["error","always"],
    "prefer-const": [
      "error", {
        "destructuring": "any",
        "ignoreReadBeforeAssign": false
      }
    ],
    "prefer-arrow-callback": ["error"],
    "no-var": ["error"],
    "no-undef": [1],
    "no-unused-vars": [1],
    "no-console": [0]
  }
};
