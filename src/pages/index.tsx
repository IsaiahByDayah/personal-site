import React, { FC } from "react"
import { Link, graphql, PageProps, useStaticQuery } from "gatsby"

import Bio from "components/Bio"
import Layout from "components/Layout"
import SEO from "components/SEO"

type Data = {
  site: {
    siteMetadata: {
      title: string
    }
  }
  allMarkdownRemark: {
    edges: [
      {
        node: {
          excerpt: string
          fields: {
            slug: string
          }
          frontmatter: {
            date: string
            title: string
            description: string
          }
        }
      }
    ]
  }
}

const BlogIndex: FC<PageProps> = ({ location }) => {
  const data: Data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
        edges {
          node {
            excerpt
            fields {
              slug
            }
            frontmatter {
              date(formatString: "MMMM DD, YYYY")
              title
              description
            }
          }
        }
      }
    }
  `)

  return (
    <Layout location={location} title={data.site.siteMetadata.title}>
      <SEO title="All posts" />
      <Bio />
      <p>
        This is my home page. Visit my <Link to="/blog">blog</Link>
      </p>
    </Layout>
  )
}

export default BlogIndex
