import { FC, createContext, useState } from "react"

type SideNavContext = {
  open: boolean
  setOpen: (open: boolean) => void
}

export const SideNavContext = createContext<SideNavContext>({
  open: false,
  setOpen: () => null,
})

const SideNavProvider: FC = ({ children }) => {
  const [open, setOpen] = useState(false)

  return (
    <SideNavContext.Provider
      value={{
        open,
        setOpen,
      }}
    >
      {children}
    </SideNavContext.Provider>
  )
}

export default SideNavProvider
