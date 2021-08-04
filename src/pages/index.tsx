import React, { FC } from "react"
import { graphql, useStaticQuery } from "gatsby"

import { IndexPageQuery } from "../../graphql-types"

import { generatePathForBlog } from "utils/blog"

import Home from "components/page-templates/Home"

const IndexPage: FC = () => {
  const data: IndexPageQuery = useStaticQuery(graphql`
    query IndexPage {
      site {
        siteMetadata {
          title
        }
      }
      allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
        edges {
          node {
            excerpt
            frontmatter {
              hash
              slug
              date(formatString: "MMMM Do, YYYY")
              title
              description
              thumbnail_alt
              thumbnail {
                childImageSharp {
                  fixed(width: 1080) {
                    src
                  }
                  gatsbyImageData(width: 1080, placeholder: BLURRED, layout: FIXED)
                }
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Home
      posts={data.allMdx.edges
        .map(edge => edge.node)
        .map((node, index) => {
          const thumbnail =
            (node.frontmatter?.thumbnail?.childImageSharp?.gatsbyImageData?.placeholder?.images?.fallback?.src &&
              node.frontmatter?.thumbnail_alt && {
                alt: node.frontmatter.thumbnail_alt,
                src: node.frontmatter.thumbnail.childImageSharp?.gatsbyImageData?.placeholder?.images?.fallback?.src,
              }) ||
            undefined

          return {
            key: node.frontmatter?.hash ?? `post-${index}`,
            primary: node.frontmatter?.title,
            secondary: node.frontmatter?.date,
            excerpt: node.frontmatter?.description ?? node.excerpt,
            to: generatePathForBlog(
              (node.frontmatter?.date &&
                node.frontmatter.slug && { date: node.frontmatter.date, slug: node.frontmatter.slug }) ||
                undefined,
              "MMMM Do, YYYY"
            ),
            thumbnail,
          }
        })}
    />
  )
}
export default IndexPage
