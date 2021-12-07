import React, { FC } from "react"
import { makeStyles, Box, Divider, Typography, Badge, Link } from "@material-ui/core"
import {
  TwitterShareButton,
  TwitterIcon,
  FacebookShareButton,
  FacebookIcon,
  RedditShareButton,
  RedditIcon,
  EmailShareButton,
  EmailIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "react-share"

import Bio from "components/blog/Bio"

const useStyles = makeStyles(({ spacing, shape }) => ({
  share: {
    display: "flex",
  },
  iconButton: {
    "&:not(:first-child)": {
      marginLeft: spacing(),
    },
  },
  icon: {
    borderRadius: shape.borderRadius,
  },
  divider: {
    margin: spacing(1, 0),
  },
  error: {
    textAlign: "center",
    fontStyle: "italic",
    margin: spacing(2, 0),
  },
  link: {
    textDecoration: "underline",
  },
}))

export type ClosingProps = {
  url: string
  title: string
}

const Closing: FC<ClosingProps> = ({ url, title }) => {
  const classes = useStyles()
  return (
    <Box py={2}>
      <Typography>
        <b>Share:</b>
      </Typography>
      <Box>
        <TwitterShareButton className={classes.iconButton} url={url} title={title}>
          <TwitterIcon className={classes.icon} size={24} />
        </TwitterShareButton>

        <FacebookShareButton className={classes.iconButton} url={url} quote={title}>
          <FacebookIcon className={classes.icon} size={24} />
        </FacebookShareButton>

        <RedditShareButton className={classes.iconButton} url={url} title={title} windowWidth={660} windowHeight={460}>
          <RedditIcon className={classes.icon} size={24} />
        </RedditShareButton>

        <LinkedinShareButton className={classes.iconButton} url={url}>
          <LinkedinIcon className={classes.icon} size={24} />
        </LinkedinShareButton>

        <EmailShareButton
          className={classes.iconButton}
          url={url}
          subject={title}
          body="Hey, I thought this was worth sharing!"
        >
          <EmailIcon className={classes.icon} size={24} />
        </EmailShareButton>
      </Box>
      <Typography variant="caption" color="textSecondary">
        (It&apos;s the easiest way to help me out and show appreciation!)
      </Typography>
      <Divider className={classes.divider} />
      <Bio py={2} />
      <Typography className={classes.error} variant="body2">
        See an error somewhere? Pobody&apos;s nerfect. This whole site is built in the open so feel free to{" "}
        <Link
          className={classes.link}
          target="_blank"
          rel="noopener"
          href="https://github.com/IsaiahByDayah/personal-site"
        >
          submit a fix
        </Link>
        !
      </Typography>
    </Box>
  )
}

export default Closing
