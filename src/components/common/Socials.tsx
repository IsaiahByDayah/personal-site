import React, { FC } from "react"
import { makeStyles, Box } from "@material-ui/core"
import cx from "classnames"

const useStyles = makeStyles(({ palette, spacing, shape }) => ({
  root: {},
}))

export type SocialsProps = {
  className?: string
}

const Socials: FC<SocialsProps> = ({ className }) => {
  const classes = useStyles()
  return <Box className={cx(classes.root, className)}>My Socials</Box>
}

export default Socials
