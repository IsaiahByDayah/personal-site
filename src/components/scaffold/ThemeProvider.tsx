import { ThemeProvider as MuiThemeProvider } from "@mui/material"
import { ReactNode, useContext } from "react"

import { ThemeSelectionContext } from "components/scaffold/ThemeSelectionProvider"
import { getTheme } from "lib/themes"

export interface IThemeProviderProps {
  children?: ReactNode
}

const ThemeProvider = ({ children }: IThemeProviderProps) => {
  const { themeSelection } = useContext(ThemeSelectionContext)
  const theme = getTheme(themeSelection)

  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
}

export default ThemeProvider
