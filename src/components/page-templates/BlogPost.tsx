import React, { FC } from "react"

import SEO from "components/scaffold/SEO"
import SimpleLayout from "components/scaffold/SimpleLayout"

export type BlogPostProps = {
  html: string
  title: string
  description?: string
  excerpt?: string
}

const BlogPost: FC<BlogPostProps> = ({ html, title, description, excerpt }) => {
  return (
    <SimpleLayout>
      <SEO title={title} description={description || excerpt} />
      <section dangerouslySetInnerHTML={{ __html: html }} />
    </SimpleLayout>
  )
}

export default BlogPost
