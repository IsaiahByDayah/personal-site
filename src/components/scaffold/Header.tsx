import React, { FC } from "react"
import { makeStyles, AppBar, Toolbar, IconButton, Typography, Avatar, Box } from "@material-ui/core"
import { MenuRounded } from "@material-ui/icons"
import { Link, useStaticQuery, graphql } from "gatsby"

const useStyles = makeStyles(({ spacing }) => ({
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
    // flexGrow: 1,
    fontWeight: 900,
  },

  centered: {
    display: "flex",
    margin: "auto",
  },
  link: {
    textDecoration: "none",
  },
}))

export type HeaderBaseprops = {
  title: string
  avatar?: string
}

export const HeaderBase: FC<HeaderBaseprops> = ({ title, avatar }) => {
  const classes = useStyles()

  return (
    <AppBar color="default">
      <Toolbar className={classes.toolbar}>
        <Box className={classes.centered}>
          {avatar && <Avatar className={classes.avatar} src={avatar} />}
          <Typography className={classes.title} variant="h6" align="center">
            <Link className={classes.link} to="/">
              {title}
            </Link>
          </Typography>
        </Box>
        <IconButton className={classes.menuButton} edge="start" color="inherit" aria-label="menu">
          <MenuRounded />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

const Header = (): JSX.Element => {
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

  return <HeaderBase title={data.site.siteMetadata.title} avatar={data.avatar.childImageSharp.fixed.src} />
}

export default Header
