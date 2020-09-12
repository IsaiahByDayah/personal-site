import React, { FC } from "react"
import { graphql, useStaticQuery } from "gatsby"

import { generatePathForBlog } from "utils/blog"

import Home from "components/page-templates/Home"

type IndexPageData = {
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

const IndexPage: FC = () => {
  const data: IndexPageData = useStaticQuery(graphql`
    query IndexPageQuery {
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
    <Home
      // posts={data.allMarkdownRemark.edges
      //   .map(edge => edge.node)
      //   .map(node => ({
      //     excerpt: node.excerpt,
      //     title: node.frontmatter.title,
      //     date: node.frontmatter.date,
      //     slug: node.frontmatter.slug,
      //   }))}
      posts={[]}
    />
  )
}
export default IndexPage

// import React, { FC, useContext } from "react"
// import { Link, graphql, PageProps, useStaticQuery } from "gatsby"

// import { ThemeContext } from "providers/ThemeProvider"

// import Bio from "components/Bio"
// import Layout from "components/Layout"
// import SEO from "components/scaffold/SEO"

// type Data = {
//   site: {
//     siteMetadata: {
//       title: string
//     }
//   }
//   allMarkdownRemark: {
//     edges: [
//       {
//         node: {
//           excerpt: string
//           fields: {
//             slug: string
//           }
//           frontmatter: {
//             date: string
//             title: string
//             description: string
//           }
//         }
//       }
//     ]
//   }
// }

// const BlogIndex: FC<PageProps> = ({ location }) => {
//   const data: Data = useStaticQuery(graphql`
//     query {
//       site {
//         siteMetadata {
//           title
//         }
//       }
//       allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
//         edges {
//           node {
//             excerpt
//             fields {
//               slug
//             }
//             frontmatter {
//               date(formatString: "MMMM DD, YYYY")
//               title
//               description
//             }
//           }
//         }
//       }
//     }
//   `)

//   const { theme, setTheme } = useContext(ThemeContext)

//   return (
//     <Layout location={location} title={data.site.siteMetadata.title}>
//       <SEO title="All posts" />
//       <Bio />
//       <p>
//         This is my home page. Visit my <Link to="/blog">blog</Link>
//       </p>
//       <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>Switch Theme</button>
//       <p>This was continuously deployed via Github Actions to Firebase Hosting</p>
//     </Layout>
//   )
// }

// export default BlogIndex
