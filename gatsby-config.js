module.exports = {
  siteMetadata: {
    title: "Isaiah Smith",
    author: {
      name: "Isaiah Smith",
      summary: "from The Bay Area to SoCal, always working on something cool.",
    },
    description: "Dev blog and personal site for my solo dev and indie hacker projects.",
    siteUrl: "https://www.isaiahsmith.dev",
    social: {
      twitter: "IsaiahByDayah",
    },
  },
  plugins: [
    "gatsby-plugin-resolve-src",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/content/blog`,
        name: "blog",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/content/assets`,
        name: "assets",
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: "gatsby-remark-responsive-iframe",
            options: {
              wrapperStyle: "margin-bottom: 1.0725rem",
            },
          },
          "gatsby-remark-prismjs",
          "gatsby-remark-copy-linked-files",
          "gatsby-remark-smartypants",
        ],
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        //trackingId: "ADD YOUR TRACKING ID HERE",
      },
    },
    "gatsby-plugin-feed",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Isaiah Smith Personal Site",
        short_name: "Isaiah Smith",
        start_url: "/",
        display: "standalone",
        theme_color: "#000000",
        background_color: "#ffffff",
        icon: "static/icon.png",
      },
    },
    "gatsby-plugin-react-helmet",
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // "gatsby-plugin-offline",
  ],
}
