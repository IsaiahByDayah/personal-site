import { alpha, Theme, Box, BoxProps, Stack, StackProps } from "@mui/material"
import { SystemStyleObject } from "@mui/system"

export type InsetBoxVariant = "all" | "horizontal" | "vertical"

export const getInsetSx = (
  variant: InsetBoxVariant
): SystemStyleObject<Theme> => ({
  boxShadow: ({ spacing, palette }) => {
    const hShadows = [
      `inset ${spacing(0.5)} 0px ${spacing(0.5)} -${spacing(0.5)} ${alpha(
        palette.common.black,
        0.25
      )}`,
      `inset -${spacing(0.5)} 0px ${spacing(0.5)} -${spacing(0.5)} ${alpha(
        palette.common.black,
        0.25
      )}`,
    ]
    const vShadows = [
      `inset 0px ${spacing(0.5)} ${spacing(0.5)} -${spacing(0.5)} ${alpha(
        palette.common.black,
        0.25
      )}`,
      `inset 0px -${spacing(0.5)} ${spacing(0.5)} -${spacing(0.5)} ${alpha(
        palette.common.black,
        0.25
      )}`,
    ]
    let shadows: string[] = []
    if (variant === "all" || variant === "vertical")
      shadows = [...shadows, ...vShadows]
    if (variant === "all" || variant === "horizontal")
      shadows = [...shadows, ...hShadows]

    return shadows.join(", ")
  },
})

export interface InsetBoxProps extends BoxProps {
  variant?: InsetBoxVariant
  sx?: SystemStyleObject<Theme>
}

export const InsetBox = ({ variant = "all", sx, ...rest }: InsetBoxProps) => (
  <Box sx={{ ...sx, ...getInsetSx(variant) }} {...rest} />
)

export interface InsetStackProps extends StackProps {
  variant?: InsetBoxVariant
  sx?: SystemStyleObject<Theme>
}

export const InsetStack = ({
  variant = "all",
  sx,
  ...rest
}: InsetStackProps) => (
  <Stack sx={{ ...sx, ...getInsetSx(variant) }} {...rest} />
)
