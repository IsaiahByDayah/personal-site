import React, { FC } from "react"
import { makeStyles, Theme, Box, BoxProps } from "@material-ui/core"
import { alpha } from "@material-ui/core/styles"
import cx from "classnames"

type InsetBoxVariant = "all" | "horizontal" | "vertical"

type StyleProps = {
  rounded?: boolean
  vertical: boolean
  horizontal: boolean
}

const useStyles = makeStyles<Theme, StyleProps>(({ palette, spacing, shape }) => ({
  root: ({ rounded, vertical, horizontal }) => {
    const hShadows = [
      `inset ${spacing(0.5)}px 0px ${spacing(0.5)}px -${spacing(0.5)}px ${alpha("#000000", 0.25)}`,
      `inset -${spacing(0.5)}px 0px ${spacing(0.5)}px -${spacing(0.5)}px ${alpha("#000000", 0.25)}`,
    ]
    const vShadows = [
      `inset 0px ${spacing(0.5)}px ${spacing(0.5)}px -${spacing(0.5)}px ${alpha("#000000", 0.25)}`,
      `inset 0px -${spacing(0.5)}px ${spacing(0.5)}px -${spacing(0.5)}px ${alpha("#000000", 0.25)}`,
    ]

    let shadows: string[] = []
    if (vertical) shadows = [...shadows, ...vShadows]
    if (horizontal) shadows = [...shadows, ...hShadows]

    const boxShadow = shadows.join(", ")

    return {
      backgroundColor: palette.secondary.main,
      boxShadow,
      borderRadius: rounded ? shape.borderRadius : undefined,
    }
  },
}))

export interface InsetBoxProps extends BoxProps {
  rounded?: boolean
  variant?: InsetBoxVariant
}

const InsetBox: FC<InsetBoxProps> = ({ className, rounded, variant = "all", ...rest }) => {
  const classes = useStyles({
    rounded,
    vertical: variant === "all" || variant === "vertical",
    horizontal: variant === "all" || variant === "horizontal",
  })
  return <Box className={cx(classes.root, className)} {...rest} />
}

export default InsetBox
