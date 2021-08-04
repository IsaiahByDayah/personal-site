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
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        title
        thumbnail {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, layout: FIXED)
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
    (data.mdx?.frontmatter?.thumbnail?.childImageSharp?.gatsbyImageData?.src &&
      data.mdx.frontmatter.thumbnail_alt && {
        src: data.mdx.frontmatter.thumbnail.childImageSharp.gatsbyImageData.src,
        alt: data.mdx.frontmatter.thumbnail_alt,
      }) ||
    undefined

  return (
    <BlogPost
      date={data.mdx?.frontmatter?.date ?? ""}
      body={data.mdx?.body ?? ""}
      readTime={data.mdx?.timeToRead ?? 0}
      title={data.mdx?.frontmatter?.title ?? ""}
      thumbnail={thumbnail}
      description={data.mdx?.frontmatter?.description ?? ""}
      excerpt={data.mdx?.excerpt ?? ""}
      previous={
        previousPost && {
          ...previousPost,
          to: generatePathForBlog(previousPost),
        }
      }
      next={
        nextPost && {
          ...nextPost,
          to: generatePathForBlog(nextPost),
        }
      }
    />
  )
}

export default BlogPostTemplate
