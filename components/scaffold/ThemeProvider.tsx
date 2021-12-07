import { FC, useContext } from "react"
import { ThemeProvider as MuiThemeProvider } from "@mui/material"

import { getTheme } from "lib/themes"

import { ThemeSelectionContext } from "components/scaffold/ThemeSelectionProvider"

const ThemeProvider: FC = ({ children }) => {
  const { themeSelection } = useContext(ThemeSelectionContext)
  const theme = getTheme(themeSelection)

  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
}

export default ThemeProvider
