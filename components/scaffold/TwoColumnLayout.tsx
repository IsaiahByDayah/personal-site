import { ReactNode } from "react"
import { Theme, Stack, Container, Grid } from "@mui/material"
import { SystemStyleObject } from "@mui/system"

import Navigation from "components/scaffold/Navigation"

import DarkModeToggleInset from "components/common/DarkModeToggleInset"
import { getOffMobileSx } from "components/common/OnMobile"

// import { HeaderSimpleContext } from "providers/HeaderSimpleProvider"

// import SideNavContent from "components/scaffold/SideNavContent"

// const useStyles = makeStyles(({ spacing }) => ({
//   side: {
//     position: "sticky",
//     top: spacing(10),
//   },
//   container: {
//     flexGrow: 1,
//     marginBottom: spacing(2),
//   },
// }))

export interface TwoColumnLayoutProps {
  sx?: SystemStyleObject<Theme>
  children?: ReactNode
}

export const TwoColumnLayout = ({ sx, children }: TwoColumnLayoutProps) => (
  <Container sx={sx}>
    <Grid container spacing={2}>
      <Grid
        item
        sm={3}
        sx={{
          // position: "sticky",
          ...getOffMobileSx("block"),
        }}
      >
        <Stack direction="column" spacing={2}>
          <Navigation />

          <DarkModeToggleInset sx={{ borderRadius: 4 }} />
        </Stack>
      </Grid>
      <Grid item xs={12} sm={9} component="main">
        {children}
      </Grid>
    </Grid>
  </Container>
)

export default TwoColumnLayout
