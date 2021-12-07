import { FC } from "react"
import { CssBaseline } from "@mui/material"

const CssBaselined: FC = ({ children }) => (
  <>
    <CssBaseline />
    {children}
  </>
)

export default CssBaselined
