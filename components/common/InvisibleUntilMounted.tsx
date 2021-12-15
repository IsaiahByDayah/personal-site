import { useState, useEffect, FC } from "react"
import { styled } from "@mui/material"

const Invisible = styled("div")({
  visibility: "hidden",
})

const InvisibleUntilMounted: FC = ({ children }) => {
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])

  return mounted ? <>{children}</> : <Invisible>{children}</Invisible>
}
export default InvisibleUntilMounted
