import { ReactNode } from "react"
import { Theme, Stack, Container, Grid } from "@mui/material"
import { SystemStyleObject } from "@mui/system"

import Navigation from "components/scaffold/Navigation"

import DarkModeToggleInset from "components/common/DarkModeToggleInset"
import { getOffMobileSx } from "components/common/OnMobile"

export interface TwoColumnLayoutProps {
  sx?: SystemStyleObject<Theme>
  children?: ReactNode
}

export const TwoColumnLayout = ({ sx, children }: TwoColumnLayoutProps) => (
  <Container sx={sx} maxWidth="xl">
    <Grid container spacing={2}>
      <Grid
        item
        sm={3}
        xl={2}
        sx={{
          ...getOffMobileSx("block"),
        }}
      >
        <Stack
          direction="column"
          spacing={2}
          position="sticky"
          top={({ spacing }) => spacing(10)}
        >
          <Navigation />

          <DarkModeToggleInset sx={{ borderRadius: 4 }} />
        </Stack>
      </Grid>
      <Grid item xs={12} sm={9} xl={10} component="main">
        {children}
      </Grid>
    </Grid>
  </Container>
)

export default TwoColumnLayout
