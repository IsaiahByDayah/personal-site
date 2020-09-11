module.exports = {
  parser: `@typescript-eslint/parser`,
  extends: [
    // NOTE: I don't think I actually _need_ these but they seems to be...well, recommended
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",

    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "prettier/@typescript-eslint",
  ],
  plugins: ["react", "react-hooks", "@typescript-eslint", "prettier"],
  env: {
    browser: true,
    node: true,
    jasmine: true,
    jest: true,
    es6: true,
  },
  rules: {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/prop-types": "off",
    "react/display-name": "off",
  },
  overrides: [
    {
      files: ["*.js", "*.jsx"],
      rules: {
        "@typescript-eslint/no-unused-vars": "off",
        "@typescript-eslint/no-var-requires": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
      },
    },
  ],
}
