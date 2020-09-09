import React, { FC, useContext } from "react"
import { makeStyles, Drawer, Box } from "@material-ui/core"
import { useStaticQuery, graphql } from "gatsby"

import { SideNavContext } from "providers/SideNavProvider"

import NavigationButtons from "components/navigation/NavigationButtons"

const useStyles = makeStyles(({ spacing }) => ({
  content: {
    width: spacing(32),
  },

  buttons: {
    padding: spacing(2),
  },
}))

export type SideNavDrawerBaseProps = {
  className?: string
  open: boolean
  onClose: () => void
  title: string
  avatar?: string
}

export const SideNavDrawerBase: FC<SideNavDrawerBaseProps> = ({ className, open, onClose, title, avatar }) => {
  const classes = useStyles()

  return (
    <Drawer className={className} open={open} onClose={onClose}>
      <Box className={classes.content}>
        <NavigationButtons className={classes.buttons} onClick={onClose} />
      </Box>
    </Drawer>
  )
}

const SideNavDrawer: FC = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SideNavDrawerQuery {
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
  const { open, setOpen } = useContext(SideNavContext)

  return (
    <>
      {children}
      <SideNavDrawerBase
        open={open}
        onClose={() => setOpen(false)}
        title={data.site.siteMetadata.title}
        avatar={data.avatar.childImageSharp.fixed.src}
      />
    </>
  )
}

export default SideNavDrawer
