import React, { FC } from "react"
import { Box } from "@material-ui/core"

import Header from "components/scaffold/Header"
import Footer from "components/scaffold/Footer"

const Layout: FC = ({ children }) => (
  <Box pt={8}>
    <Header />
    <main>{children}</main>
    <Footer />
  </Box>
)

export default Layout
