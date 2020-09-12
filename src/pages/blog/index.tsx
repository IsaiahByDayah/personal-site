import React, { FC } from "react"
import { Link, graphql, PageProps, useStaticQuery } from "gatsby"

import { generatePathForBlog } from "utils/blog"

import Bio from "components/Bio"
import Layout from "components/Layout"
import SEO from "components/scaffold/SEO"

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
          frontmatter: {
            hash: string
            slug: string
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
            frontmatter {
              hash
              slug
              date(formatString: "MMMM Do, YYYY")
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
        const title = node.frontmatter.title || `Post from ${node.frontmatter.date}`
        return (
          <article key={node.frontmatter.hash}>
            <header>
              <h3 style={{}}>
                <Link style={{ boxShadow: `none` }} to={generatePathForBlog(node, "MMMM Do, YYYY")}>
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
