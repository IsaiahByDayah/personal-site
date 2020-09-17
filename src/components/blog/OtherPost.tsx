import React, { FC } from "react"
import { makeStyles, Typography } from "@material-ui/core"
import { Link } from "gatsby"

import Thumbnail from "components/common/Thumbnail"

const useStyles = makeStyles(({ palette }) => ({
  root: {
    textDecoration: "none",

    "&:hover": {
      textDecoration: "underline",
    },
  },
  thumbnail: {
    width: "100%",
  },
  title: {
    color: palette.text.primary,
    fontWeight: 900,
  },
}))

export type OtherPostProps = {
  title: string
  to: string
  thumbnail?: {
    src: string
    alt: string
  }
}

const OtherPost: FC<OtherPostProps> = ({ to, title, thumbnail }) => {
  const classes = useStyles()
  return (
    <Link className={classes.root} to={to}>
      {thumbnail && <Thumbnail className={classes.thumbnail} {...thumbnail} />}
      <Typography className={classes.title} variant="caption">
        {title}
      </Typography>
    </Link>
  )
}

export default OtherPost
