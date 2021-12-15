// custom typefaces
// import "typeface-montserrat"
// import "typeface-merriweather"

import React from "react"

import ThemeProvider from "providers/ThemeProvider"
import SideNavProvider from "providers/SideNavProvider"
import HeaderSimpleProvider from "providers/HeaderSimpleProvider"
import MDXProvider from "providers/MDXProvider"

import SideNavDrawer from "components/scaffold/SideNavDrawer"
import Layout from "components/scaffold/Layout"

export const wrapRootElement = ({ element }) => {
  return (
    <HeaderSimpleProvider>
      <ThemeProvider>
        <MDXProvider>
          <SideNavProvider>{element}</SideNavProvider>
        </MDXProvider>
      </ThemeProvider>
    </HeaderSimpleProvider>
  )
}

export const wrapPageElement = ({ element }) => {
  return (
    <SideNavDrawer>
      <Layout>{element}</Layout>
    </SideNavDrawer>
  )
}
