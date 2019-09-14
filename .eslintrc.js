module.exports = {
  'extends': ['eslint-config-rax/typescript'],
  'globals': {
    "Component": true,
    "Page": true,
    "__weex_require__": true
  },
  'rules': {
    "no-return-assign": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/camelcase": "off",
    "new-cap": ["error", {
      "newIsCap": true,
      "capIsNewExceptions": ["Component", "Page"]
    }],
  }
};
