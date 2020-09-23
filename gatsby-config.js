module.exports = {
  siteMetadata: {
    title: "Isaiah Smith",
    author: {
      name: "Isaiah Smith",
      social: {
        twitter: "IsaiahByDayah",
        twitch: "IsaiahByDayah",
        youTube: "isaiahsmith",
        instagram: "isaiahbydayah",
        github: "isaiahbydayah",
        tiktok: "isaiahbydayah",
      },
    },
    description: "Dev blog and personal site for my solo dev and indie hacker projects.",
    siteUrl: "https://www.isaiahsmith.dev",
  },
  plugins: [
    "gatsby-plugin-graphql-codegen",
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
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
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
    "gatsby-plugin-feed-mdx",
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
    {
      resolve: "gatsby-theme-material-ui",
      options: {
        webFontsConfig: {
          fonts: {
            google: [
              {
                family: `Nunito`,
                variants: ["400", "900"],
              },
            ],
          },
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // "gatsby-plugin-offline",
  ],
}
