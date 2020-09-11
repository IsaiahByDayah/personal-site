import { Theme, responsiveFontSizes } from "@material-ui/core"

import { ThemeName } from "providers/ThemeProvider"

import lightTheme from "utils/themes/light"
import darkTheme from "utils/themes/dark"

const themeMaps: { [name in ThemeName]: Theme } = {
  light: lightTheme,
  dark: darkTheme,
}

export const getTheme = (val: ThemeName = "light"): Theme =>
  responsiveFontSizes(themeMaps[val.toLowerCase() as ThemeName] ?? lightTheme)
