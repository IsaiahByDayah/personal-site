import React, { FC, ReactNode } from "react"
import { makeStyles, Box, Typography } from "@material-ui/core"
import { Link } from "gatsby"

const useStyles = makeStyles(({ spacing, palette, shape, shadows }) => ({
  thumbnail: {
    borderRadius: shape.borderRadius,
    boxShadow: shadows[3],
  },
  primary: {
    fontWeight: 900,
    margin: spacing(0.5, 0, 1, 0),
  },
  secondary: {
    marginTop: spacing(),
    display: "block",
  },
  exceprt: {},
  link: {
    textDecoration: "none",
    color: palette.secondary.contrastText,
    "&:hover": {
      textDecoration: "underline",
    },
    "&:visited": {
      color: palette.secondary.contrastText,
    },
  },
}))

export type PostProps = {
  className?: string
  thumbnail?: {
    src: string
    alt: string
  }
  primary?: ReactNode
  secondary?: ReactNode
  excerpt?: ReactNode
  to?: string
}

const Post: FC<PostProps> = ({ className, thumbnail, primary, secondary, excerpt, to }) => {
  const classes = useStyles()

  let _thumbnail = thumbnail ? <img {...thumbnail} className={classes.thumbnail} /> : null
  if (_thumbnail && to) {
    _thumbnail = (
      <Link className={classes.link} to={to}>
        {_thumbnail}
      </Link>
    )
  }

  const _primary =
    typeof primary === "string" ? (
      <Typography className={classes.primary} variant="h6">
        {to ? (
          <Link className={classes.link} to={to}>
            {primary}
          </Link>
        ) : (
          primary
        )}
      </Typography>
    ) : (
      primary
    )
  const _secondary =
    typeof secondary === "string" ? (
      <Typography className={classes.secondary} color="primary" variant="caption">
        {secondary}
      </Typography>
    ) : (
      primary
    )
  const _exceprt =
    typeof excerpt === "string" ? <Typography className={classes.exceprt}>{excerpt}</Typography> : primary

  return (
    <Box className={className} maxWidth="100%">
      {_thumbnail}
      {_secondary}
      {_primary}
      {_exceprt}
    </Box>
  )
}

export default Post
