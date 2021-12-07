/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { FC } from "react"
import { Box, BoxProps, Typography, Link } from "@material-ui/core"
import { useStaticQuery, graphql } from "gatsby"
import Image, { FixedObject } from "gatsby-image"
import { makeStyles } from "@material-ui/core"
import cx from "classnames"

import { BioQuery } from "../../../graphql-types"
import shape from "@material-ui/core/styles/shape"

const useStyles = makeStyles(({ spacing, palette, shadows }) => ({
  root: {
    color: palette.text.secondary,
  },
  avatar: {
    borderRadius: shape.borderRadius,
    height: 50,
    width: 50,
    marginRight: spacing(2),
    backgroundColor: palette.grey[400],
    boxShadow: shadows[3],
    flexShrink: 0,

    float: "left",
    top: spacing(0.5),
  },
  link: {
    textDecoration: "underline",
  },
}))

export interface BioBaseProps extends BoxProps {
  avatar?: FixedObject
  name: string
  social?: {
    twitter?: string | null
    twitch?: string | null
  } | null
}

export const BioBase: FC<BioBaseProps> = ({ className, avatar, name, social, ...rest }) => {
  const classes = useStyles()

  const twitter = (
    <Link className={classes.link} target="_blank" rel="noopener" href={`https://www.twitter.com/${social?.twitter}`}>
      Twitter
    </Link>
  )
  const twitch = (
    <Link className={classes.link} target="_blank" rel="noopener" href={`https://www.twitch.tv/${social?.twitch}`}>
      Twitch
    </Link>
  )

  const ign = (
    <Link className={classes.link} target="_blank" rel="noopener" href={`https://www.ign.com`}>
      IGN.com
    </Link>
  )

  return (
    <Box className={cx(classes.root, className)} {...rest}>
      {avatar && <Image className={classes.avatar} fixed={avatar} alt={name} />}
      <Typography variant="body2">
        Written by me, <strong>{name}</strong>. Born and raised in Buffalo, NY, I traded in my snow boots for AllBirds
        and moved to The Bay Area to be a software engineer at {ign}. Now though, you can find me in sunny SoCal 🌞.
        I&apos;m always working on something new and interesting in my spare time, so stop by my {twitch} channel, or
        better yet, follow me on {twitter} to see what I&apos;m up to!
      </Typography>
    </Box>
  )
}

const Bio: FC<BoxProps> = props => {
  const data: BioQuery = useStaticQuery(graphql`
    query Bio {
      avatar: file(absolutePath: { regex: "/profile-pic.png/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            social {
              twitter
              twitch
            }
          }
        }
      }
    }
  `)

  return (
    <BioBase
      avatar={(data.avatar?.childImageSharp?.fixed as FixedObject) ?? undefined}
      name={data.site?.siteMetadata?.author?.name ?? ""}
      social={data.site?.siteMetadata?.author?.social}
      {...props}
    />
  )
}

export default Bio
