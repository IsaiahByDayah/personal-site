import React, { FC } from "react"
import { makeStyles, Box } from "@material-ui/core"
import cx from "classnames"

import NavigationButton from "components/navigation/NavigationButton"

const useStyles = makeStyles(({ spacing }) => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },

  navButton: {
    "&:not(:last-child)": {
      marginBottom: spacing(),
    },
  },
}))

export type NavigationButtonsProps = {
  className?: string
  onClick?: () => void
}

export const NavigationButtons: FC<NavigationButtonsProps> = ({ className, onClick }) => {
  const classes = useStyles()

  return (
    <Box className={cx(classes.root, className)}>
      <NavigationButton className={classes.navButton} to="/" onClick={onClick}>
        Home
      </NavigationButton>
      <NavigationButton className={classes.navButton} to="/projects" onClick={onClick}>
        Projects
      </NavigationButton>
      <NavigationButton className={classes.navButton} to="/about" onClick={onClick}>
        About
      </NavigationButton>
    </Box>
  )
}

export default NavigationButtons
