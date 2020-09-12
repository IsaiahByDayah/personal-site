import React, { FC } from "react"
import { Box, Container, Grid } from "@material-ui/core"

import Header from "components/scaffold/Header"
import Footer from "components/scaffold/Footer"
import SideNavContent from "components/scaffold/SideNavContent"

const SideNavLayout: FC = ({ children }) => (
  <Box pt={8}>
    <Header />
    <Container component="main">
      <Grid container spacing={2}>
        <Grid component={Box} item display={{ xs: "none", sm: "block" }} sm={4}>
          <SideNavContent />
        </Grid>
        <Grid item>{children}</Grid>
      </Grid>
    </Container>
    <Footer />
  </Box>
)

export default SideNavLayout
