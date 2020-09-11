import React, { FC, useContext } from "react"
import { Drawer } from "@material-ui/core"

import { SideNavContext } from "providers/SideNavProvider"

import SideNavDrawerContent from "components/scaffold/SideNavDrawerContent"

// NOTE: This is a seperate component because @material-ui's transition components (and anything that uses them) blows up during snapshot creation
const SideNavDrawer: FC = ({ children }) => {
  const { open, setOpen } = useContext(SideNavContext)

  const close = () => setOpen(false)

  return (
    <>
      {children}
      <Drawer open={open} onClose={close}>
        <SideNavDrawerContent onClick={close} />
      </Drawer>
    </>
  )
}

export default SideNavDrawer
