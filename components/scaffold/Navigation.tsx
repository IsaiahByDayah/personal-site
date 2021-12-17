import { Theme, Stack } from "@mui/material"
import { SystemStyleObject } from "@mui/system"
import NextLink from "next/link"

import NavigationButton from "components/common/NavigationButton"

export type NavigationProps = {
  sx?: SystemStyleObject<Theme>
}

export const Navigation = ({ sx }: NavigationProps) => (
  <Stack sx={sx} spacing={1}>
    <NextLink href="/" passHref>
      <NavigationButton fullWidth>Home</NavigationButton>
    </NextLink>

    <NextLink href="/projects/1" passHref>
      <NavigationButton fullWidth>Projects</NavigationButton>
    </NextLink>

    <NextLink href="/about" passHref>
      <NavigationButton fullWidth>About</NavigationButton>
    </NextLink>
  </Stack>
)

export default Navigation
