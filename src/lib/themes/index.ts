import { Theme, responsiveFontSizes } from "@mui/material"

import { ThemeSelection } from "components/scaffold/ThemeSelectionProvider"

import lightTheme from "lib/themes/light"
import darkTheme from "lib/themes/dark"

const themeMaps: { [name in ThemeSelection]: Theme } = {
  light: lightTheme,
  dark: darkTheme,
}

export const getTheme = (val: ThemeSelection = "light"): Theme =>
  responsiveFontSizes(themeMaps[val.toLowerCase() as ThemeSelection] ?? lightTheme)
