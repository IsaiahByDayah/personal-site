import React, { FC, CSSProperties } from "react"
import { makeStyles, Theme, Typography } from "@material-ui/core"
import { Link } from "gatsby"

import Thumbnail from "components/common/Thumbnail"

type StypeProps = {
  alignTitle: "left" | "right" | "center"
}

const useStyles = makeStyles<Theme, StypeProps>(({ palette, spacing }) => ({
  root: {
    textDecoration: "none",

    "&:hover": {
      textDecoration: "underline",
    },
  },
  thumbnail: {
    width: "100%",
  },
  title: ({ alignTitle }) => {
    let justifyContent: "flex-start" | "flex-end" | "center"
    let textAlign: "left" | "right" | "center"

    switch (alignTitle) {
      case "center":
        justifyContent = "center"
        textAlign = "center"
        break
      case "right":
        justifyContent = "flex-end"
        textAlign = "right"
        break
      default:
        justifyContent = "flex-start"
        textAlign = "left"
        break
    }
    return {
      color: palette.text.primary,
      fontWeight: 900,
      display: "flex",
      marginTop: spacing(0.5),

      justifyContent,
      textAlign,
    }
  },
}))

export type OtherPostProps = {
  title: string
  to: string
  thumbnail?: {
    src: string
    alt: string
  }
  alignTitle?: "left" | "right" | "center"
}

const OtherPost: FC<OtherPostProps> = ({ to, title, thumbnail, alignTitle = "left" }) => {
  const classes = useStyles({ alignTitle })
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
