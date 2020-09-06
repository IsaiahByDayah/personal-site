import dayjs from "dayjs"
import customParseFormat from "dayjs/plugin/customParseFormat"

dayjs.extend(customParseFormat)

export type Blog = {
  frontmatter: {
    date: string
    slug: string
  }
}

// NOTE: for consistency, this function is copied inside gatsby-node.js to create blog post paths
export const generatePathForBlog = (blog?: Blog, incomingDateFormat?: string) => {
  if (!blog) return "/"
  const date = dayjs(blog.frontmatter.date, incomingDateFormat).format("MM-DD-YYYY")
  return `/blog/${date}-${blog.frontmatter.slug}`
}
