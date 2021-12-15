const path = require("path")

// REF: https://mui.com/guides/migration-v4/#storybook-emotion-with-v5
const toPath = (filePath) => path.join(process.cwd(), filePath)

module.exports = {
  webpackFinal: async (config) => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        modules: [...config.resolve.modules, path.resolve(__dirname, "..")],
        alias: {
          ...config.resolve.alias,
          "@emotion/core": toPath("node_modules/@emotion/react"),
          "emotion-theming": toPath("node_modules/@emotion/react"),
        },
      },
    }
  },
  stories: [
    "../components/**/*.stories.mdx",
    "../components/**/*.stories.@(js|jsx|ts|tsx)",
    "../hooks/**/*.stories.mdx",
    "../hooks/**/*.stories.@(js|jsx|ts|tsx)",
    "../__pages__/**/*.stories.mdx",
    "../__pages__/**/*.stories.@(js|jsx|ts|tsx)",
    "../.slicemachine/**/*.stories.mdx",
    "../.slicemachine/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-a11y",
  ],
}
