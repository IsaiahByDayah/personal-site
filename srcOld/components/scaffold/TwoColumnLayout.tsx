import { FC, ElementType, useContext, useEffect, ReactNode } from "react"
import { Box, Container, Grid, makeStyles } from "@material-ui/core"

import { HeaderSimpleContext } from "providers/HeaderSimpleProvider"

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

export type TwoColumnLayoutBaseProps = {
  component?: ElementType
  side: ReactNode
  sideComponent?: ElementType
}

export const TwoColumnLayoutBase: FC<TwoColumnLayoutBaseProps> = ({
  children,
  component = "main",
  side,
  sideComponent = "nav",
}) => {
  const classes = useStyles()

  return (
    <Container className={classes.container}>
      <Grid container spacing={2}>
        <Grid component={Box} item display={{ xs: "none", sm: "block" }} sm={3}>
          <Box className={classes.side} component={sideComponent}>
            {side}
          </Box>
        </Grid>
        <Grid item xs={12} sm={9}>
          <Box component={component}>{children}</Box>
        </Grid>
      </Grid>
    </Container>
  )
}
type TwoColumnLayoutProps = {
  component?: ElementType
}

const TwoColumnLayout: FC<TwoColumnLayoutProps> = ({
  children,
  component = "main",
}) => {
  const { setSimple } = useContext(HeaderSimpleContext)

  useEffect(() => {
    setSimple(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <TwoColumnLayoutBase side={<SideNavContent />} component={component}>
      {children}
    </TwoColumnLayoutBase>
  )
}

export default TwoColumnLayout
