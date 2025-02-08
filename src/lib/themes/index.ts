import { responsiveFontSizes, Theme } from "@mui/material"

import { ThemeSelection } from "components/scaffold/ThemeSelectionProvider"
import darkTheme from "lib/themes/dark"
import lightTheme from "lib/themes/light"

const themeMaps: { [name in ThemeSelection]: Theme } = {
  light: lightTheme,
  dark: darkTheme,
}

export const getTheme = (val: ThemeSelection = "light"): Theme =>
  responsiveFontSizes(
    themeMaps[val.toLowerCase() as ThemeSelection] ?? lightTheme,
  )
