import {
  useCallback,
  createContext,
  useState,
  FC,
  Dispatch,
  SetStateAction,
} from "react"

interface DrawerContextValue {
  drawerOpen: boolean
  setDrawerOpen: Dispatch<SetStateAction<boolean>>
  toggleDrawer: () => void
}

export const DrawerContext = createContext<DrawerContextValue>({
  drawerOpen: false,
  setDrawerOpen: () => null,
  toggleDrawer: () => null,
})

const DrawerProvider: FC = ({ children }) => {
  const [drawerOpen, setDrawerOpen] = useState(false)

  const toggleDrawer = useCallback(
    () => setDrawerOpen((curr) => !curr),
    [setDrawerOpen]
  )

  return (
    <DrawerContext.Provider value={{ drawerOpen, setDrawerOpen, toggleDrawer }}>
      {children}
    </DrawerContext.Provider>
  )
}
export default DrawerProvider
