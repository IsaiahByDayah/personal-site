import React from "react"

import ThemeProvider from "providers/ThemeProvider"

export const wrapRootElement = ({ element }) => {
  return <ThemeProvider>{element}</ThemeProvider>
}
