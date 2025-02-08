module.exports = {
  extends: ["next/core-web-vitals", "prettier"],
  rules: {
    semi: ["error", "never"],
    "@next/next/no-img-element": "off",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        ignoreRestSiblings: true,
      },
    ],
  },
}
