import React, { FC } from "react"
import { makeStyles, Box, Typography, Avatar } from "@material-ui/core"
import { useStaticQuery, graphql } from "gatsby"
import cx from "classnames"

import InsetBox from "components/common/InsetBox"
import Socials from "components/common/Socials"
import DarkModeToggle from "components/common/DarkModeToggle"

import NavigationButtons from "components/navigation/NavigationButtons"

const useStyles = makeStyles(({ spacing, shadows, palette }) => ({
  content: {
    width: spacing(32),
    display: "flex",
    flexDirection: "column",
    height: "100%",
  },

  inset: {
    padding: spacing(2),
    marginTop: spacing(8),
  },
  avatarContainer: {
    height: spacing(4),
    position: "relative",
    marginBottom: spacing(),
  },
  avatar: {
    backgroundColor: palette.grey[400],
    height: spacing(12),
    width: spacing(12),
    boxShadow: shadows[3],
    position: "absolute",
    bottom: 0,
    left: "50%",
    transform: "TranslateX(-50%)",
  },
  title: {
    fontWeight: 900,
  },
  socials: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: spacing(),
    padding: spacing(0, 1),
  },

  buttons: {
    padding: spacing(2),
  },

  toggleWrapper: {
    display: "flex",
    justifyContent: "flex-end",
    padding: spacing(0.5, 2),
  },
}))

type SideNavDrawerContentData = {
  avatar: {
    childImageSharp: {
      fixed: {
        src: string
      }
    }
  }
  site: {
    siteMetadata: {
      title: string
    }
  }
}

export type SideNavDrawerContentProps = {
  className?: string
  onClick?: () => void
}

const SideNavDrawerContent: FC<SideNavDrawerContentProps> = ({ className, onClick }) => {
  const classes = useStyles()
  const data: SideNavDrawerContentData = useStaticQuery(graphql`
    query SideNavDrawerContentQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.png/" }) {
        childImageSharp {
          fixed(width: 100, height: 100) {
            src
          }
        }
      }
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const title = data.site.siteMetadata.title
  const avatar = data.avatar.childImageSharp.fixed.src

  return (
    <Box className={cx(classes.content, className)}>
      <InsetBox className={classes.inset} variant="vertical">
        <Box className={classes.avatarContainer}>
          <Avatar className={classes.avatar} src={avatar} />
        </Box>
        <Typography className={classes.title} variant="h6" align="center">
          {title}
        </Typography>
        <Socials className={classes.socials} size={2} />
      </InsetBox>
      <Box flexGrow={1}>
        <NavigationButtons className={classes.buttons} onClick={onClick} />
      </Box>
      <InsetBox className={classes.toggleWrapper} variant="vertical">
        <DarkModeToggle />
      </InsetBox>
    </Box>
  )
}

export default SideNavDrawerContent
