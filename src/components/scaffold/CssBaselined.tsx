import { CssBaseline } from "@mui/material"
import { ReactNode } from "react"

export interface ICssBaselinedProps {
  children?: ReactNode
}

const CssBaselined = ({ children }: ICssBaselinedProps) => (
  <>
    <CssBaseline />
    {children}
  </>
)

export default CssBaselined
