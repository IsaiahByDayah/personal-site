import { FC, ElementType, useContext, useEffect } from "react"
import { makeStyles, Box, Container } from "@material-ui/core"

import { HeaderSimpleContext } from "providers/HeaderSimpleProvider"

const useStyles = makeStyles({
  container: {
    flexGrow: 1,
  },
})

type SingleColumnLayoutProps = {
  component?: ElementType
}

const SingleColumnLayout: FC<SingleColumnLayoutProps> = ({
  children,
  component = "main",
}) => {
  const classes = useStyles()
  const { setSimple } = useContext(HeaderSimpleContext)

  useEffect(() => {
    setSimple(true)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Container
      className={classes.container}
      component={component}
      maxWidth="md"
    >
      <Box pb={2}>{children}</Box>
    </Container>
  )
}

export default SingleColumnLayout
