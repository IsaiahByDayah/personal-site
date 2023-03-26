import { styled } from "@mui/material"
import { ReactNode, useEffect, useState } from "react"

const Invisible = styled("div")({
  visibility: "hidden",
})

export interface IInvisibleUntilMountedProps {
  children?: ReactNode
}

const InvisibleUntilMounted = ({ children }: IInvisibleUntilMountedProps) => {
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])

  return mounted ? <>{children}</> : <Invisible>{children}</Invisible>
}
export default InvisibleUntilMounted
