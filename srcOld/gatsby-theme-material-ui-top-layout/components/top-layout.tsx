import { FC, useContext } from "react"
import ThemeTopLayout from "gatsby-theme-material-ui-top-layout/src/components/top-layout"

import { getTheme } from "utils/themes"

import { ThemeContext } from "providers/ThemeProvider"

const TopLayout: FC = ({ children }) => {
  const { theme } = useContext(ThemeContext)
  const activeTheme = getTheme(theme)
  return <ThemeTopLayout theme={activeTheme}>{children}</ThemeTopLayout>
}

export default TopLayout
