// custom typefaces
// import "typeface-montserrat"
// import "typeface-merriweather"

import "prismjs/themes/prism.css"
import React from "react"

import ThemeProvider from "providers/ThemeProvider"
import SideNavProvider from "providers/SideNavProvider"

export const wrapRootElement = ({ element }) => {
  return (
    <ThemeProvider>
      <SideNavProvider>{element}</SideNavProvider>
    </ThemeProvider>
  )
}

// export const wrapPageElement = ({}) => {
//   return ()
// }
