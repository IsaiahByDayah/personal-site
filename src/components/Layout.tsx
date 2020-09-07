import React, { FC } from "react"

import Header from "components/scaffold/Header"

const Layout: FC = ({ children }) => (
  <div
    style={{
      marginLeft: `auto`,
      marginRight: `auto`,
    }}
  >
    {/* <header>{header}</header> */}
    <Header />
    <main>{children}</main>
    <footer>
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </footer>
  </div>
)

export default Layout
