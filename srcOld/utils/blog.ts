import dayjs from "dayjs"
import customParseFormat from "dayjs/plugin/customParseFormat"

dayjs.extend(customParseFormat)

export type BlogData = {
  date: string
  slug: string
}

// NOTE: for consistency, this function is copied inside gatsby-node.js to create blog post paths
export const generatePathForBlog = (blog?: BlogData, incomingDateFormat?: string): string => {
  if (!blog) return "/"
  const date = dayjs(blog.date, incomingDateFormat).format("MM-DD-YYYY")
  return `/blog/${date}-${blog.slug}`
}
