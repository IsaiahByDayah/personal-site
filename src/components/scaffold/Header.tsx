import React, { FC, useContext } from "react"
import { makeStyles, fade, AppBar, Toolbar, IconButton, Typography, Avatar, Box, Link } from "@material-ui/core"
import { MenuRounded } from "@material-ui/icons"
import { Link as RouterLink, useStaticQuery, graphql } from "gatsby"
import cx from "classnames"

import { HeaderQuery } from "../../../graphql-types"

import useBreakpoint, { Breakpoint } from "hooks/useBreakpoint"

import { SideNavContext } from "providers/SideNavProvider"
import { HeaderSimpleContext } from "providers/HeaderSimpleProvider"

import Socials from "components/common/Socials"
import DarkModeToggle from "components/common/DarkModeToggle"

const useStyles = makeStyles(({ spacing, palette, shadows }) => ({
  root: {
    boxShadow: `inset 0px -${spacing(0.5)}px ${spacing(0.5)}px -${spacing(0.5)}px ${fade(palette.common.black, 0.25)}`,
  },
  toolbar: {
    position: "relative",
    justifyContent: "space-between",
  },
  menuButton: {
    position: "absolute",
  },

  nameAndAvatar: {
    display: "flex",
  },
  avatar: {
    height: spacing(4),
    width: spacing(4),
    marginRight: spacing(2),
    boxShadow: shadows[3],
    backgroundColor: palette.grey[400],
  },
  title: {
    fontWeight: 900,
  },
  link: {
    textDecoration: "none",

    "&:link": {
      color: palette.secondary.contrastText,
    },

    "&:visited": {
      color: palette.secondary.contrastText,
    },
  },

  centered: {
    margin: "auto",
  },
}))

export type HeaderBaseProps = {
  title: string
  avatar?: string
  onOpen?: () => void
  simple?: boolean
}

export const HeaderBase: FC<HeaderBaseProps> = ({ title, avatar, onOpen, simple }) => {
  const classes = useStyles()
  const breakpoint = useBreakpoint()

  const nameAndAvatar = (className?: string) => (
    <Box className={cx(classes.nameAndAvatar, className)}>
      {avatar && <Avatar className={classes.avatar} src={avatar} alt="avatar photo" />}
      <Typography className={classes.title} variant="h6" align="center">
        <Link className={classes.link} component={RouterLink} to="/">
          {title}
        </Link>
      </Typography>
    </Box>
  )

  const simpleHeaderContent = (
    <>
      {nameAndAvatar(classes.centered)}
      {onOpen && (
        <IconButton className={classes.menuButton} edge="start" color="inherit" aria-label="menu" onClick={onOpen}>
          <MenuRounded />
        </IconButton>
      )}
    </>
  )

  const complexHeaderContent = (
    <>
      {nameAndAvatar()}
      <Socials />
      <DarkModeToggle />
    </>
  )

  const headerContent = simple || breakpoint === Breakpoint.xs ? simpleHeaderContent : complexHeaderContent

  return (
    <AppBar className={classes.root} elevation={0} color="secondary">
      <Toolbar className={classes.toolbar}>{headerContent}</Toolbar>
    </AppBar>
  )
}

const Header: FC = () => {
  const { setOpen } = useContext(SideNavContext)
  const { simple } = useContext(HeaderSimpleContext)

  const data: HeaderQuery = useStaticQuery(graphql`
    query Header {
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

  return (
    <HeaderBase
      title={data.site?.siteMetadata?.title ?? ""}
      avatar={data.avatar?.childImageSharp?.fixed?.src}
      onOpen={() => setOpen(true)}
      simple={simple}
    />
  )
}

export default Header
