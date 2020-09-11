import React, { FC } from "react"
import { makeStyles, Box } from "@material-ui/core"
import { useStaticQuery, graphql } from "gatsby"
import cx from "classnames"

import NavigationButtons from "components/navigation/NavigationButtons"

const useStyles = makeStyles(({ spacing }) => ({
  content: {
    width: spacing(32),
  },

  buttons: {
    padding: spacing(2),
  },
}))

export type SideNavDrawerContentBaseProps = {
  className?: string
  title: string
  avatar?: string
  onClick?: () => void
}

export const SideNavDrawerContentBase: FC<SideNavDrawerContentBaseProps> = ({ className, onClick, title, avatar }) => {
  const classes = useStyles()

  return (
    <Box className={cx(classes.content, className)}>
      <NavigationButtons className={classes.buttons} onClick={onClick} />
    </Box>
  )
}

export type SideNavDrawerContentProps = {
  className?: string
  onClick?: () => void
}

const SideNavDrawerContent: FC<SideNavDrawerContentProps> = props => {
  const data = useStaticQuery(graphql`
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
  return (
    <SideNavDrawerContentBase
      {...props}
      title={data.site.siteMetadata.title}
      avatar={data.avatar.childImageSharp.fixed.src}
    />
  )
}

export default SideNavDrawerContent
