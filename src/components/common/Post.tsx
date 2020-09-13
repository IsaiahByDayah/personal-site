import React, { FC, ReactNode } from "react"
import { makeStyles, Box, BoxProps, Typography } from "@material-ui/core"
import { Link } from "gatsby"

const useStyles = makeStyles(({ spacing, palette, shape, shadows }) => ({
  thumbnailContainer: {
    position: "relative",
    width: "100%",
    paddingTop: "50%",
  },
  thumbnail: {
    position: "absolute",
    borderRadius: shape.borderRadius,
    boxShadow: shadows[3],
    top: "0px",
    left: "0px",
    bottom: "0px",
    right: "0px",
    width: "100%",
    height: "100%",

    objectFit: "cover",
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
    "&:link": {
      color: palette.secondary.contrastText,
    },
    "&:visited": {
      color: palette.secondary.contrastText,
    },
  },
}))

export interface PostProps extends BoxProps {
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

const Post: FC<PostProps> = ({ className, thumbnail, primary, secondary, excerpt, to, ...rest }) => {
  const classes = useStyles()

  let _thumbnail = thumbnail ? (
    <div className={classes.thumbnailContainer}>
      <img {...thumbnail} className={classes.thumbnail} />
    </div>
  ) : null

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
    <Box className={className} maxWidth="100%" {...rest}>
      {_thumbnail}
      {_secondary}
      {_primary}
      {_exceprt}
    </Box>
  )
}

export default Post
