import React, { FC } from "react"
import { makeStyles, Container, Typography, Box } from "@material-ui/core"

import Thumbnail from "components/common/Thumbnail"

import SEO from "components/scaffold/SEO"
import SimpleLayout from "components/scaffold/SimpleLayout"

const useStyles = makeStyles(({ spacing }) => ({
  thumbnail: {
    marginBottom: spacing(4),
  },
  title: {
    fontWeight: 900,
    marginBottom: spacing(4),
  },
}))

export type BlogPostProps = {
  html: string
  title: string
  date: string
  readTime: number
  description?: string
  excerpt?: string
  thumbnail?: {
    src: string
    alt: string
  }
  previous?: {
    title: string
    to: string
    thumbnail?: {
      src: string
      alt: string
    }
  }
  next?: {
    title: string
    to: string
    thumbnail?: {
      src: string
      alt: string
    }
  }
}

const BlogPost: FC<BlogPostProps> = ({ html, title, description, excerpt, thumbnail, date, readTime }) => {
  const classes = useStyles()
  return (
    <SimpleLayout>
      <SEO title={title} description={description || excerpt} />
      {thumbnail && (
        <Container className={classes.thumbnail} maxWidth="sm" disableGutters>
          <Thumbnail {...thumbnail} />
        </Container>
      )}
      <Typography variant="caption" color="primary">
        {date} &bull; {readTime} min
      </Typography>
      <Typography className={classes.title} variant="h4">
        {title}
      </Typography>
      <section dangerouslySetInnerHTML={{ __html: html }} />
    </SimpleLayout>
  )
}

export default BlogPost
