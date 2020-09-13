import React, { FC } from "react"
import { makeStyles, Box, Container } from "@material-ui/core"

import Header from "components/scaffold/Header"
import Footer from "components/scaffold/Footer"

const useStyles = makeStyles({
  container: {
    flexGrow: 1,
  },
})

const SingleColumnLayout: FC = ({ children }) => {
  const classes = useStyles()
  return (
    <Box pt={10} display="flex" flexDirection="column" height="100vh">
      <Header simple={true} />
      <Container className={classes.container} component="main" maxWidth="md">
        <>{children}</>
      </Container>
      <Footer />
    </Box>
  )
}

export default SingleColumnLayout
