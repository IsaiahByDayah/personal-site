import React, { FC } from "react"
import { Box, Container } from "@material-ui/core"

import Header from "components/scaffold/Header"
import Footer from "components/scaffold/Footer"

const SingleColumnLayout: FC = ({ children }) => (
  <Box pt={8}>
    <Header simple={true} />
    <Container component="main">
      <>{children}</>
    </Container>
    <Footer />
  </Box>
)

export default SingleColumnLayout
