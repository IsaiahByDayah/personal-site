import { FC, createContext, useState } from "react"

type HeaderSimpleContext = {
  simple: boolean
  setSimple: (simple: boolean) => void
}

export const HeaderSimpleContext = createContext<HeaderSimpleContext>({
  simple: false,
  setSimple: () => null,
})

const HeaderSimpleProvider: FC = ({ children }) => {
  const [simple, setSimple] = useState(true)

  return (
    <HeaderSimpleContext.Provider
      value={{
        simple,
        setSimple,
      }}
    >
      {children}
    </HeaderSimpleContext.Provider>
  )
}

export default HeaderSimpleProvider
