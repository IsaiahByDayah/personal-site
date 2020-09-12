import React, { FC, ReactNode } from "react"
import { makeStyles, Box, Typography } from "@material-ui/core"

const useStyles = makeStyles(({ spacing, palette, shape, shadows }) => ({
  thumbnail: {
    borderRadius: shape.borderRadius,
    boxShadow: shadows[3],
  },
  primary: {
    fontWeight: 900,
    marginTop: spacing(0.5, 0, 1, 0),
  },
  secondary: {
    marginTop: spacing(),
    display: "block",
  },
  exceprt: {},
  link: {
    textDecoration: "none",

    color: palette.secondary.contrastText,
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
}

const Post: FC<PostProps> = ({ className, thumbnail, primary, secondary, excerpt }) => {
  const classes = useStyles()

  const _primary =
    typeof primary === "string" ? (
      <Typography className={classes.primary} variant="h6">
        {primary}
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
      {thumbnail && <img {...thumbnail} className={classes.thumbnail} />}
      {_secondary}
      {_primary}
      {_exceprt}
    </Box>
  )
}

export default Post
