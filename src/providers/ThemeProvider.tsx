import React, { FC, createContext, useState } from "react"

export type ThemeName = "light" | "dark"

type ThemeContext = {
  theme: ThemeName
  setTheme: (newTheme: ThemeName) => void
}

export const ThemeContext = createContext<ThemeContext>({
  theme: "light",
  setTheme: () => null,
})

const ThemeProvider: FC = ({ children }) => {
  const [theme, setTheme] = useState<ThemeName>("light")

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
