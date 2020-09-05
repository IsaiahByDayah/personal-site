import React, { FC } from "react"
import { Link, graphql, PageProps, useStaticQuery } from "gatsby"

import Bio from "../components/Bio"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import { rhythm } from "../utils/typography"

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
      {data.allMarkdownRemark.edges.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
          <article key={node.fields.slug}>
            <header>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
                }}
              >
                <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                  {title}
                </Link>
              </h3>
              <small>{node.frontmatter.date}</small>
            </header>
            <section>
              <p
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
            </section>
          </article>
        )
      })}
    </Layout>
  )
}

export default BlogIndex
