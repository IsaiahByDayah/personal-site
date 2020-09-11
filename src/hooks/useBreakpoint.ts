import { useTheme, useMediaQuery } from "@material-ui/core"

export enum Breakpoint {
  xs = 0,
  sm = 1,
  md = 2,
  lg = 3,
  xl = 4,
}

const useBreakpoint = (): Breakpoint => {
  const theme = useTheme()
  const xl = useMediaQuery(theme.breakpoints.up("xl"))
  const lg = useMediaQuery(theme.breakpoints.up("lg"))
  const md = useMediaQuery(theme.breakpoints.up("md"))
  const sm = useMediaQuery(theme.breakpoints.up("sm"))

  if (xl) return Breakpoint.xl
  if (lg) return Breakpoint.lg
  if (md) return Breakpoint.md
  if (sm) return Breakpoint.sm
  return Breakpoint.xs
}

export default useBreakpoint
