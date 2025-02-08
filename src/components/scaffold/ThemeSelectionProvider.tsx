import { useMediaQuery } from "@mui/material"
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useCallback,
} from "react"

import InvisibleUntilMounted from "components/common/InvisibleUntilMounted"
import useLocalStorage from "hooks/useLocalStorage"

const THEME_SELECTION_VALUE_KEY = "THEME_SELECTION_VALUE"

export type ThemeSelection = "light" | "dark"

interface ThemeSelectionContextValue {
  themeSelection: ThemeSelection
  setThemeSelection: Dispatch<SetStateAction<ThemeSelection>>
  toggleThemeSelection: () => void
}

export const ThemeSelectionContext = createContext<ThemeSelectionContextValue>({
  themeSelection: "light",
  setThemeSelection: () => null,
  toggleThemeSelection: () => null,
})

export interface IThemeSelectionProviderProps {
  children?: ReactNode
}

const ThemeSelectionProvider = ({ children }: IThemeSelectionProviderProps) => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)")
  const [themeSelection, setThemeSelection] = useLocalStorage<ThemeSelection>(
    THEME_SELECTION_VALUE_KEY,
    prefersDarkMode ? "dark" : "light",
  )

  const toggleThemeSelection = useCallback(
    () => setThemeSelection((curr) => (curr === "light" ? "dark" : "light")),
    [setThemeSelection],
  )

  return (
    <InvisibleUntilMounted>
      <ThemeSelectionContext.Provider
        value={{ themeSelection, setThemeSelection, toggleThemeSelection }}
      >
        {children}
      </ThemeSelectionContext.Provider>
    </InvisibleUntilMounted>
  )
}
export default ThemeSelectionProvider
