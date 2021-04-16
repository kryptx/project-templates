module.exports = {
  "env": {
    "browser": true,
    "commonjs": true,
    "es2021": true,
    "jest": true
  },
  "extends": [ "eslint:recommended", "plugin:jest/recommended" ],
  "parserOptions": {
    "ecmaVersion": 12
  },
  "plugins": [ "jest" ],
  "rules": {
    "semi": [ "error", "always" ],
    "complexity": [ "error", 5 ],
  }
};
