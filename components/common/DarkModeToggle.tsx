import { useContext } from "react"
import { IconButton } from "@mui/material"
import { SystemStyleObject } from "@mui/system"
import { Brightness2Rounded, Brightness5Rounded } from "@mui/icons-material"

import { ThemeSelectionContext } from "components/scaffold/ThemeSelectionProvider"

export interface DarkModeToggleProps {
  sx?: SystemStyleObject
}

const DarkModeToggle = ({ sx }: DarkModeToggleProps) => {
  const { themeSelection, toggleThemeSelection } = useContext(
    ThemeSelectionContext
  )

  const iconSx: SystemStyleObject = {
    color: "primary.main",
  }

  return (
    <IconButton sx={sx} onClick={() => toggleThemeSelection()}>
      {themeSelection === "dark" ? (
        <Brightness2Rounded sx={iconSx} />
      ) : (
        <Brightness5Rounded sx={iconSx} />
      )}
    </IconButton>
  )
}

export default DarkModeToggle
