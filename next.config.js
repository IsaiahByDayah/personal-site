module.exports = {
  eslint: {
    // REF: https://nextjs.org/docs/basic-features/eslint#linting-custom-directories-and-files
    dirs: ["pages", "components", "lib", "hooks"],
  },
  redirects: async () => [
    {
      source: "/twitter",
      destination: "https://twitter.com/IsaiahByDayah",
      permanent: false,
    },
    {
      source: "/twitch",
      destination: "https://www.twitch.tv/isaiahbydayah",
      permanent: false,
    },
    {
      source: "/youtube",
      destination: "https://www.youtube.com/isaiahsmith",
      permanent: false,
    },
    {
      source: "/patreon",
      destination: "https://www.patreon.com/isaiahbydayah",
      permanent: false,
    },
    {
      source: "/github",
      destination: "https://github.com/IsaiahByDayah",
      permanent: false,
    },
  ],
  modularizeImports: {
    "@mui/icons-material": {
      transform: "@mui/icons-material/{{member}}",
    },
  },
}
