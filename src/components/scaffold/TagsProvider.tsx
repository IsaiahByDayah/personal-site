import { Content } from "@prismicio/client"
import { createContext } from "react"

export const TagsContext = createContext<Content.TagDocument[] | undefined>(
  undefined,
)
