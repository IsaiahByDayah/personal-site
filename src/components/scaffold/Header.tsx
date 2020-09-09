import React, { FC, useContext } from "react"
import { makeStyles, fade, AppBar, Toolbar, IconButton, Typography, Avatar, Box } from "@material-ui/core"
import { MenuRounded } from "@material-ui/icons"
import { Link, useStaticQuery, graphql } from "gatsby"

import { SideNavContext } from "providers/SideNavProvider"

const useStyles = makeStyles(({ spacing, palette }) => ({
  root: {
    backgroundColor: palette.secondary.main,
    boxShadow: `inset 0px -${spacing(0.5)}px ${spacing(0.5)}px -${spacing(0.5)}px ${fade(palette.common.black, 0.25)}`,
    color: palette.secondary.contrastText,
  },
  toolbar: {
    position: "relative",
  },
  menuButton: {
    position: "absolute",
  },
  avatar: {
    height: spacing(4),
    width: spacing(4),
    marginRight: spacing(2),
  },
  title: {
    fontWeight: 900,
  },

  centered: {
    display: "flex",
    margin: "auto",
  },
  link: {
    // color: "inherit",
    textDecoration: "none",

    "&:visited": {
      color: palette.secondary.contrastText,
    },
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

  return (
    <AppBar className={classes.root} elevation={0}>
      <Toolbar className={classes.toolbar}>
        <Box className={classes.centered}>
          {avatar && <Avatar className={classes.avatar} src={avatar} />}
          <Typography className={classes.title} variant="h6" align="center">
            <Link className={classes.link} to="/">
              {title}
            </Link>
          </Typography>
        </Box>
        {onOpen && (
          <IconButton className={classes.menuButton} edge="start" color="inherit" aria-label="menu" onClick={onOpen}>
            <MenuRounded />
          </IconButton>
        )}
      </Toolbar>
    </AppBar>
  )
}

const Header = (): JSX.Element => {
  const { setOpen } = useContext(SideNavContext)
  const data = useStaticQuery(graphql`
    query HeaderQuery {
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
      title={data.site.siteMetadata.title}
      avatar={data.avatar.childImageSharp.fixed.src}
      onOpen={() => setOpen(true)}
    />
  )
}

export default Header
