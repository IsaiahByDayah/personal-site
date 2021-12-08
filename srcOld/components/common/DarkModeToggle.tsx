import { FC, useContext } from "react"
import { makeStyles, Switch, Box } from "@material-ui/core"
import { Brightness2Rounded, Brightness5Rounded } from "@material-ui/icons"
import cx from "classnames"

import { ThemeContext } from "providers/ThemeProvider"

const useStyles = makeStyles(({ palette }) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },

  icon: {
    color: palette.primary.main,
  },
}))

type DarkModeToggleBaseProps = {
  className?: string
  darkMode: boolean
  onToggle: () => void
}

export const DarkModeToggleBase: FC<DarkModeToggleBaseProps> = ({
  className,
  darkMode,
  onToggle,
}) => {
  const classes = useStyles()

  return (
    <Box className={cx(classes.root, className)}>
      <Brightness5Rounded className={classes.icon} />
      <Switch
        color="primary"
        checked={darkMode}
        onChange={onToggle}
        inputProps={{ "aria-label": "Theme Toggle" }}
      />
      <Brightness2Rounded className={classes.icon} />
    </Box>
  )
}

type DarkModeToggleProps = {
  className?: string
}

const DarkModeToggle: FC<DarkModeToggleProps> = (props) => {
  const { theme, setTheme } = useContext(ThemeContext)

  const toggle = () => {
    if (theme === "dark") setTheme("light")
    else if (theme === "light") setTheme("dark")
  }

  return (
    <DarkModeToggleBase
      {...props}
      darkMode={theme === "dark"}
      onToggle={toggle}
    />
  )
}

export default DarkModeToggle
