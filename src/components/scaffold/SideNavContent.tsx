import React, { FC } from "react"
import { makeStyles, Box } from "@material-ui/core"
import { useStaticQuery, graphql } from "gatsby"
import cx from "classnames"

import { SideNavContentQuery } from "../../../graphql-types"

import NavigationButtons from "components/navigation/NavigationButtons"

const useStyles = makeStyles(({ spacing }) => ({
  root: {},
  navItem: {
    "&:not(:first-child)": {
      marginTop: spacing(2),
    },
  },
}))

export type SideNavContentBaseProps = {
  className?: string
  title: string
  avatar?: string
  onClick?: () => void
}

export const SideNavContentBase: FC<SideNavContentBaseProps> = ({ className, onClick, title, avatar }) => {
  const classes = useStyles()

  return (
    <Box className={cx(classes.root, className)}>
      <NavigationButtons className={classes.navItem} onClick={onClick} />
    </Box>
  )
}

export type SideNavContentProps = {
  className?: string
  onClick?: () => void
}

const SideNavContent: FC<SideNavContentProps> = props => {
  const data: SideNavContentQuery = useStaticQuery(graphql`
    query SideNavContent {
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
    <SideNavContentBase
      {...props}
      title={data.site?.siteMetadata?.title ?? ""}
      avatar={data.avatar?.childImageSharp?.fixed?.src}
    />
  )
}

export default SideNavContent
