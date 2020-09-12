import React, { FC } from "react"
import { Link, graphql, PageProps } from "gatsby"

import Bio from "components/Bio"
import Layout from "components/Layout"
import SEO from "components/scaffold/SEO"

import { generatePathForBlog } from "utils/blog"

type BlogPostTemplatePageContext = {
  slug: string
  previous?: MarkDownRemark
  next?: MarkDownRemark
}

type MarkDownRemark = {
  id: string
  excerpt: string
  html: string
  frontmatter: {
    date: string
    slug: string
    title: string
    description: string
  }
}

type BlogPostTemplateData = {
  site: {
    siteMetadata: {
      title: string
    }
  }
  markdownRemark: MarkDownRemark
}

// export const pageQuery = graphql`
//   query BlogPostBySlug($slug: String!) {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//     markdownRemark(fields: { slug: { eq: $slug } }) {
//       id
//       excerpt(pruneLength: 160)
//       html
//       frontmatter {
//         title
//         date(formatString: "MMMM DD, YYYY")
//         description
//       }
//     }
//   }
// `
export const pageQuery = graphql`
  query BlogPostByHash($hash: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(frontmatter: { hash: { eq: $hash } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`

type BlogPostTemplateProps = PageProps<BlogPostTemplateData, BlogPostTemplatePageContext>

const BlogPostTemplate: FC<BlogPostTemplateProps> = ({ pageContext, location, data }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title={post.frontmatter.title} description={post.frontmatter.description || post.excerpt} />
      <article>
        <header>
          <h1
            style={{
              marginBottom: 0,
            }}
          >
            {post.frontmatter.title}
          </h1>
          <p
            style={{
              display: `block`,
            }}
          >
            {post.frontmatter.date}
          </p>
        </header>
        <section dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr style={{}} />
        <footer>
          <Bio />
        </footer>
      </article>

      <nav>
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              // <Link to={previous.frontmatter.path} rel="prev">
              <Link to={generatePathForBlog(previous)} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              // <Link to={next.frontmatter.path} rel="next">
              <Link to={generatePathForBlog(next)} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  )
}

export default BlogPostTemplate
