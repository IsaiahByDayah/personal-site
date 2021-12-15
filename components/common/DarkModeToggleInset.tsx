import { useContext } from "react"
import { Theme, Typography } from "@mui/material"
import { SystemStyleObject } from "@mui/system"

import { ThemeSelectionContext } from "components/scaffold/ThemeSelectionProvider"

import { InsetStack, InsetBoxVariant } from "components/common/Inset"
import DarkModeToggle from "components/common/DarkModeToggle"

export type DarkModeToggleInsetProps = {
  sx?: SystemStyleObject<Theme>
  variant?: InsetBoxVariant
}

export const DarkModeToggleInset = ({
  sx,
  variant,
}: DarkModeToggleInsetProps) => {
  const { themeSelection } = useContext(ThemeSelectionContext)
  return (
    <InsetStack
      sx={{ ...sx, backgroundColor: "background.paper" }}
      variant={variant}
      direction="row"
      alignItems="center"
      justifyContent="center"
      py={1}
      spacing={1}
    >
      <Typography>
        Lights {themeSelection === "light" ? "Out" : "On"}?
      </Typography>
      <DarkModeToggle />
    </InsetStack>
  )
}

export default DarkModeToggleInset
