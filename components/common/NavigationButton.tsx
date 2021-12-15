import { forwardRef } from "react"
import { Button, ButtonProps } from "@mui/material"
import { ChevronRightRounded } from "@mui/icons-material"

export type NavigationButtonProps = ButtonProps

const NavigationButton = forwardRef<HTMLButtonElement, NavigationButtonProps>(
  ({ sx, ...rest }, ref) => (
    <Button
      ref={ref}
      sx={{
        ...sx,
        backgroundColor: "secondary.main",
        "&:hover": {
          backgroundColor: "secondary.dark",
        },
        justifyContent: "space-between",
      }}
      fullWidth
      endIcon={<ChevronRightRounded />}
      {...rest}
    />
  )
)
NavigationButton.displayName = "NavigationButton"

export default NavigationButton
