// custom typefaces
// import "typeface-montserrat"
// import "typeface-merriweather"

import "prismjs/themes/prism.css"
import React from "react"

import ThemeProvider from "providers/ThemeProvider"

export const wrapRootElement = ({ element }) => {
  return <ThemeProvider>{element}</ThemeProvider>
}
