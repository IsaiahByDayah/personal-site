import { Stack, Theme } from "@mui/material"
import { SystemStyleObject } from "@mui/system"
import NextLink from "next/link"

import NavigationButton from "components/common/NavigationButton"

export type NavigationProps = {
  sx?: SystemStyleObject<Theme>
}

export const Navigation = ({ sx }: NavigationProps) => (
  <Stack sx={sx} spacing={1}>
    <NavigationButton fullWidth LinkComponent={NextLink} href="/">
      Home
    </NavigationButton>

    <NavigationButton fullWidth LinkComponent={NextLink} href="/projects/1">
      Projects
    </NavigationButton>

    <NavigationButton fullWidth LinkComponent={NextLink} href="/about">
      About
    </NavigationButton>
  </Stack>
)

export default Navigation
