// NOTE: Cannot use "import" here for whatever reason so these would not work...
// import path from "path"
// import { createFilePath } from "gatsby-source-filesystem"

const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")
const get = require("lodash/get")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPostTemplate = path.resolve("./src/templates/BlogPost.tsx")

  const result = await graphql(
    `
      {
        allMdx(sort: { fields: [frontmatter___date], order: DESC }, limit: 1000) {
          edges {
            node {
              frontmatter {
                slug
                date(formatString: "MM-DD-YYYY")
              }
              id
            }
            next {
              frontmatter {
                thumbnail {
                  childImageSharp {
                    fixed {
                      src
                    }
                  }
                }
                thumbnail_alt
                title
                slug
                date
              }
            }
            previous {
              frontmatter {
                thumbnail {
                  childImageSharp {
                    fixed {
                      src
                    }
                  }
                }
                thumbnail_alt
                title
                slug
                date
              }
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  // Create blog posts pages.
  const posts = result.data.allMdx.edges

  // NOTE: swap next/previous because we're query in DESC order
  posts.forEach(({ node, next: previous, previous: next }, index) => {
    const nextThumbnailSrc = get(next, "frontmatter.thumbnail.childImageSharp.fixed.src")
    const nextThumbnailAlt = get(next, "frontmatter.thumbnail_alt")
    const nextPost =
      (next && {
        title: next.frontmatter.title,
        slug: next.frontmatter.slug,
        date: next.frontmatter.date,
        thumbnail:
          nextThumbnailSrc && nextThumbnailAlt
            ? {
                src: nextThumbnailSrc,
                alt: nextThumbnailAlt,
              }
            : undefined,
      }) ||
      undefined

    const previousThumbnailSrc = get(previous, "frontmatter.thumbnail.childImageSharp.fixed.src")
    const previousThumbnailAlt = get(previous, "frontmatter.thumbnail_alt")
    const previousPost =
      (previous && {
        title: previous.frontmatter.title,
        slug: previous.frontmatter.slug,
        date: previous.frontmatter.date,
        thumbnail:
          previousThumbnailSrc && previousThumbnailAlt
            ? {
                src: previousThumbnailSrc,
                alt: previousThumbnailAlt,
              }
            : undefined,
      }) ||
      undefined

    createPage({
      // NOTE: for consistency, this format needs to stay in sync with generateBlogPath() inside src/utils/blog.ts
      path: `/blog/${node.frontmatter.date}-${node.frontmatter.slug}`,
      component: blogPostTemplate,
      context: {
        id: node.id,
        previousPost,
        nextPost,
      },
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
