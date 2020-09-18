import React, { FC } from "react"
import { makeStyles, Container, Typography, Grid } from "@material-ui/core"
import { ArrowBackRounded, ArrowForwardRounded } from "@material-ui/icons"
import { useLocation } from "@reach/router"
import cx from "classnames"

import Thumbnail from "components/common/Thumbnail"

import SEO from "components/scaffold/SEO"
import SingleColumnLayout from "components/scaffold/SingleColumnLayout"

import Closing from "components/blog/Closing"
import OtherPost from "components/blog/OtherPost"

const useStyles = makeStyles(({ spacing }) => ({
  thumbnail: {
    marginBottom: spacing(4),
  },
  title: {
    fontWeight: 900,
    marginBottom: spacing(4),
  },
  bullet: {
    margin: spacing(0, 1),
  },

  otherPosts: {
    padding: spacing(4, 0),
  },
  direction: {
    display: "flex",
    marginBottom: spacing(0.5),
    alignItems: "center",
  },
  icon: {
    height: spacing(2),
    width: spacing(2),
  },
  previous: {},
  previousIcon: {
    marginRight: spacing(),
  },
  next: {
    justifyContent: "flex-end",
  },
  nextIcon: {
    marginLeft: spacing(),
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

const BlogPost: FC<BlogPostProps> = ({
  html,
  title,
  description,
  excerpt,
  thumbnail,
  date,
  readTime,
  next,
  previous,
}) => {
  const classes = useStyles()
  const location = useLocation()
  return (
    <SingleColumnLayout component="article">
      <SEO title={title} description={description || excerpt} />
      {thumbnail && (
        <Container className={classes.thumbnail} maxWidth="sm" disableGutters>
          <Thumbnail {...thumbnail} />
        </Container>
      )}
      <Typography variant="caption" color="primary">
        {date} <span className={classes.bullet}>&bull;</span> {Math.max(1, readTime)} min read
      </Typography>
      <Typography className={classes.title} variant="h4">
        {title}
      </Typography>
      <section dangerouslySetInnerHTML={{ __html: html }} />
      {(previous || next) && (
        <Grid className={classes.otherPosts} container justify="space-between">
          {previous && (
            <Grid item xs={5} md={4}>
              <Typography className={cx(classes.direction, classes.previous)} variant="body2">
                <ArrowBackRounded className={cx(classes.icon, classes.previousIcon)} /> Previous
              </Typography>
              <OtherPost {...previous} />
            </Grid>
          )}
          <Grid item xs={1} />
          {next && (
            <Grid item xs={5} md={4}>
              <Typography className={cx(classes.direction, classes.next)} variant="body2">
                Next <ArrowForwardRounded className={cx(classes.icon, classes.nextIcon)} />
              </Typography>
              <OtherPost {...next} alignTitle="right" />
            </Grid>
          )}
        </Grid>
      )}
      <Closing url={location.href} title={title} />
    </SingleColumnLayout>
  )
}

export default BlogPost
