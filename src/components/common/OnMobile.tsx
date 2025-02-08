import { Box, useMediaQuery } from "@mui/material"
import { AllSystemCSSProperties, SystemStyleObject, Theme } from "@mui/system"
import { ReactNode } from "react"

export const onMobileSx: SystemStyleObject = { display: { sm: "none" } }
export const getOffMobileSx = (
  sm: AllSystemCSSProperties["display"],
): SystemStyleObject => ({
  display: { xs: "none", sm },
})
export const offMobileSx = getOffMobileSx("initial")

export interface OnMobileProps {
  children?: ReactNode
  not?: boolean
  implamentation?: "css" | "js"
  sm?: AllSystemCSSProperties["display"]
  sx?: SystemStyleObject<Theme>
}

const OnMobile = ({
  not,
  implamentation = "css",
  sm = "initial",
  children,
  sx,
  ...rest
}: OnMobileProps) => {
  const mobile = useMediaQuery<Theme>(({ breakpoints }) =>
    breakpoints.only("xs"),
  )
  if (implamentation === "js")
    return (!not && mobile) || (not && !mobile) ? <>{children}</> : null

  return (
    <Box
      {...rest}
      sx={{
        ...sx,
        ...(not ? getOffMobileSx(sm) : onMobileSx),
      }}
    >
      {children}
    </Box>
  )
}

export default OnMobile
