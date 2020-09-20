import React from "react"

import ThemeProvider from "providers/ThemeProvider"
import SideNavProvider from "providers/SideNavProvider"
import HeaderSimpleProvider from "providers/HeaderSimpleProvider"

import SideNavDrawer from "components/scaffold/SideNavDrawer"
import Layout from "components/scaffold/Layout"

export const wrapRootElement = ({ element }) => {
  return (
    <HeaderSimpleProvider>
      <ThemeProvider>
        <SideNavProvider>{element}</SideNavProvider>
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
