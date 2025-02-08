import { ReactNode, useContext } from "react"
import { Theme, Stack, Container, Grid } from "@mui/material"
import { SystemStyleObject } from "@mui/system"

import Drawer from "components/scaffold/Drawer"
import Navigation from "components/scaffold/Navigation"
import { TagsContext } from "components/scaffold/TagsProvider"

import DarkModeToggleInset from "components/common/DarkModeToggleInset"
import { getOffMobileSx } from "components/common/OnMobile"
import Tags from "components/common/Tags"

export interface TwoColumnLayoutProps {
  sx?: SystemStyleObject<Theme>
  children?: ReactNode
}

export const TwoColumnLayout = ({ sx, children }: TwoColumnLayoutProps) => {
  const tags = useContext(TagsContext)
  return (
    <Container sx={sx}>
      <Grid container spacing={4}>
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
            spacing={5}
            position="sticky"
            top={({ spacing }) => spacing(10)}
          >
            <Navigation />

            <DarkModeToggleInset sx={{ borderRadius: 4 }} />

            <Tags tags={tags} />
          </Stack>
        </Grid>
        <Grid item xs={12} sm={9} xl={10} component="main">
          {children}
        </Grid>
      </Grid>
      <Drawer />
    </Container>
  )
}

export default TwoColumnLayout
