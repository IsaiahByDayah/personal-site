import { Button, ButtonProps } from "@mui/material"
import { ChevronRightRounded } from "@mui/icons-material"

// const useStyles = makeStyles(({ palette }) => ({
//   root: {
//     textDecoration: "none",
//   },
//   button: {
//     textTransform: "none",
//     color: palette.primary.main,

//     backgroundColor: palette.secondary.main,
//     "&:hover": {
//       backgroundColor: palette.secondary.dark,
//     },
//   },

//   label: {
//     display: "flex",
//     textAlign: "left",
//   },
//   content: {
//     flexGrow: 1,
//   },
// }))

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
