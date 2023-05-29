module.exports = {
  extends: [
    "eslint:recommended",
    "airbnb-base",
    "./configs/airbnb-base-mod",
    "prettier",
    "./overrides/ts",
    "./configs/env",
  ],
};
