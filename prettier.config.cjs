module.exports = {
  semi: false,
  singleQuote: false,
  plugins: [
    "@ianvs/prettier-plugin-sort-imports",
    "prettier-plugin-tailwindcss",
  ],
  importOrder: [
    "",
    "<BUILTIN_MODULES>", // Node.js built-in modules
    "",
    "<THIRD_PARTY_MODULES>", // Imports not matched by other special words or groups.
    "",
    "^(@)(/.*)$",
    "",
    "^[.]", // relative imports
  ],
  tailwindConfig: "./tailwind.config.ts",
  tailwindFunctions: ["clsx"],
}
