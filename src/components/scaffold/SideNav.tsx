import React, { FC, useContext } from "react"
import { makeStyles, Drawer, Box } from "@material-ui/core"
import { useStaticQuery, graphql } from "gatsby"
import cx from "classnames"

import { SideNavContext } from "providers/SideNavProvider"

import SideNavButton from "components/scaffold/SideNavButton"

const useStyles = makeStyles(({ spacing }) => ({
  content: {
    width: spacing(32),
  },

  buttons: {
    padding: spacing(),
    display: "flex",
    flexDirection: "column",
  },

  navButton: {
    "&:not(:last-child)": {
      marginBottom: spacing(),
    },
  },
}))

export type SideNavBaseProps = {
  className?: string
  open: boolean
  onClose: () => void
  title: string
  avatar?: string
}

export const SideNavBase: FC<SideNavBaseProps> = ({ children, className, open, onClose, title, avatar }) => {
  const classes = useStyles()

  return (
    <>
      {children}
      <Drawer className={className} open={open} onClose={onClose}>
        <Box className={classes.content}>
          <Box className={classes.buttons}>
            <SideNavButton className={classes.navButton} to="/blog" onClick={onClose}>
              Blog
            </SideNavButton>
            <SideNavButton className={classes.navButton} to="/projects" onClick={onClose}>
              Projects
            </SideNavButton>
            <SideNavButton className={classes.navButton} to="/about" onClick={onClose}>
              About
            </SideNavButton>
          </Box>
        </Box>
      </Drawer>
    </>
  )
}

const SideNav = (): JSX.Element => {
  const data = useStaticQuery(graphql`
    query SideNavQuery {
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
  const [open, setOpen] = useContext(SideNavContext)

  return (
    <SideNavBase
      open={open}
      onClose={() => setOpen(false)}
      title={data.site.siteMetadata.title}
      avatar={data.avatar.childImageSharp.fixed.src}
    />
  )
}

export default SideNav
