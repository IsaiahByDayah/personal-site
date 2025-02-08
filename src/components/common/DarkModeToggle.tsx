import { Icon, IconButton } from "@mui/material"
import { SystemStyleObject } from "@mui/system"
import { useContext } from "react"
// import { Brightness2Rounded, Brightness5Rounded } from "@mui/icons-material"
import { RiLightbulbLine, RiMoonFill } from "react-icons/ri"

import { ThemeSelectionContext } from "components/scaffold/ThemeSelectionProvider"

export interface DarkModeToggleProps {
  sx?: SystemStyleObject
}

const DarkModeToggle = ({ sx }: DarkModeToggleProps) => {
  const { themeSelection, toggleThemeSelection } = useContext(
    ThemeSelectionContext,
  )

  const iconSx: SystemStyleObject = {
    color: "primary.main",
  }

  return (
    <IconButton sx={sx} onClick={() => toggleThemeSelection()}>
      {themeSelection === "dark" ? (
        <Icon sx={iconSx} component={RiLightbulbLine} />
      ) : (
        <Icon sx={iconSx} component={RiMoonFill} />
      )}
    </IconButton>
  )
}

export default DarkModeToggle
