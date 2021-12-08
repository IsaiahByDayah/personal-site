import { Button, ButtonProps } from "@mui/material"
import { ChevronRightRounded } from "@mui/icons-material"

export type NavigationButtonProps = ButtonProps

const NavigationButton = ({ sx, href, ...rest }: NavigationButtonProps) => (
  <Button
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

export default NavigationButton
