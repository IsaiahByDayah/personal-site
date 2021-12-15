import { FC } from "react"
import { Box } from "@material-ui/core"

import Header from "components/scaffold/Header"
import Footer from "components/scaffold/Footer"

const TwoColumnLayout: FC = ({ children }) => {
  return (
    <Box pt={10} display="flex" flexDirection="column" height="100vh">
      <Header />
      {children}
      <Footer />
    </Box>
  )
}

export default TwoColumnLayout
