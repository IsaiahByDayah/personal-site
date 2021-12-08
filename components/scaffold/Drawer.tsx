import { useContext, useEffect } from "react"
import { SwipeableDrawer } from "@mui/material"
import { SystemStyleObject, Theme } from "@mui/system"
import { useRouter } from "next/router"

import { DrawerContext } from "components/scaffold/DrawerProvider"
import DrawerContent from "components/scaffold/DrawerContent"

import { onMobileSx } from "components/common/OnMobile"

export interface DrawerProps {
  sx?: SystemStyleObject<Theme>
}

const Drawer = ({ sx }: DrawerProps) => {
  const { drawerOpen, setDrawerOpen } = useContext(DrawerContext)
  const router = useRouter()

  useEffect(() => {
    const onRouteChangeComplete = () => setDrawerOpen(false)

    router.events.on("routeChangeComplete", onRouteChangeComplete)

    return () => router.events.off("routeChangeComplete", onRouteChangeComplete)
  }, [router, setDrawerOpen])

  return (
    <SwipeableDrawer
      sx={{
        ...sx,
        ...onMobileSx,
      }}
      open={drawerOpen}
      anchor="right"
      onClose={() => setDrawerOpen(false)}
      onOpen={() => setDrawerOpen(true)}
      ModalProps={{ keepMounted: true }}
      PaperProps={{
        sx: { width: ({ spacing }) => spacing(35), maxWidth: "90vw" },
      }}
    >
      <DrawerContent />
    </SwipeableDrawer>
  )
}

export default Drawer
