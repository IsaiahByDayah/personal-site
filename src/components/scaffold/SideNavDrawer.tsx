import React, { FC, useContext } from "react"
import { Drawer, Box } from "@material-ui/core"

import { SideNavContext } from "providers/SideNavProvider"

import SideNavDrawerContent from "components/scaffold/SideNavDrawerContent"

// TODO: Create story for drawer that has storyshots disabled
// NOTE: This is a seperate component because @material-ui's transition components (and anything that uses them) blows up during snapshot creation
const SideNavDrawer: FC = ({ children }) => {
  const { open, setOpen } = useContext(SideNavContext)

  const close = () => setOpen(false)

  return (
    <>
      {children}
      <Drawer open={open} onClose={close}>
        <Box width={250} height="100%">
          <SideNavDrawerContent onClick={close} />
        </Box>
      </Drawer>
    </>
  )
}

export default SideNavDrawer
