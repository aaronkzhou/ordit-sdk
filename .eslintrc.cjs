const path = require("path");

module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "./node_modules/@waveshq/standard-prettier",
  ],
  parser: "@typescript-eslint/parser",
};