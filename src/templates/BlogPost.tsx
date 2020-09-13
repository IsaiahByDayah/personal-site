import React, { FC } from "react"
import { graphql, PageProps } from "gatsby"

import { BlogPostTemplateQuery } from "../../graphql-types"

import BlogPost from "components/page-templates/BlogPost"

import { generatePathForBlog } from "utils/blog"

type BlogPostTemplatePageContext = {
  id: string
  previousPost?: OtherPost
  nextPost?: OtherPost
}

type OtherPost = {
  date: string
  slug: string
  title: string
  thumbnail?: {
    src: string
    alt: string
  }
}

export const pageQuery = graphql`
  query BlogPostTemplate($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        thumbnail {
          childImageSharp {
            fixed {
              src
            }
          }
        }
        thumbnail_alt
        description
        date(formatString: "MMMM Do, YYYY")
      }
      excerpt
      timeToRead
    }
  }
`

type BlogPostTemplateProps = PageProps<BlogPostTemplateQuery, BlogPostTemplatePageContext>

const BlogPostTemplate: FC<BlogPostTemplateProps> = ({ pageContext, data }) => {
  const { previousPost, nextPost } = pageContext

  const thumbnail =
    (data.markdownRemark?.frontmatter?.thumbnail?.childImageSharp?.fixed?.src &&
      data.markdownRemark.frontmatter.thumbnail_alt && {
        src: data.markdownRemark.frontmatter.thumbnail.childImageSharp.fixed.src,
        alt: data.markdownRemark.frontmatter.thumbnail_alt,
      }) ||
    undefined

  return (
    <BlogPost
      date={data.markdownRemark?.frontmatter?.date ?? ""}
      html={data.markdownRemark?.html ?? ""}
      readTime={data.markdownRemark?.timeToRead ?? 0}
      title={data.markdownRemark?.frontmatter?.title ?? ""}
      thumbnail={thumbnail}
      description={data.markdownRemark?.frontmatter?.description ?? ""}
      excerpt={data.markdownRemark?.excerpt ?? ""}
      previous={
        previousPost && {
          ...previousPost,
          to: generatePathForBlog(previousPost),
        }
      }
      next={
        nextPost && {
          ...nextPost,
          to: generatePathForBlog(previousPost),
        }
      }
    />
  )
}

export default BlogPostTemplate
