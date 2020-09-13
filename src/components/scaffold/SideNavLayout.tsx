import React, { FC } from "react"
import { Box, Container, Grid, makeStyles } from "@material-ui/core"

import Header from "components/scaffold/Header"
import Footer from "components/scaffold/Footer"
import SideNavContent from "components/scaffold/SideNavContent"

const useStyles = makeStyles(({ spacing }) => ({
  side: {
    position: "sticky",
    top: spacing(10),
  },
  container: {
    flexGrow: 1,
    marginBottom: spacing(2),
  },
}))

const SideNavLayout: FC = ({ children }) => {
  const classes = useStyles()
  return (
    <Box pt={10} display="flex" flexDirection="column" height="100vh">
      <Header />
      <Container className={classes.container} component="main">
        <Grid container spacing={2}>
          <Grid component={Box} item display={{ xs: "none", sm: "block" }} sm={3}>
            <Box className={classes.side}>
              <SideNavContent />
            </Box>
          </Grid>
          <Grid item xs={12} sm={9}>
            <Box>{children}</Box>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </Box>
  )
}

export default SideNavLayout
