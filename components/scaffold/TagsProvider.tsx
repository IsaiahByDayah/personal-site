import { createContext } from "react"

import { TagDocument } from "lib/prismic/types"

export const TagsContext = createContext<TagDocument[] | undefined>()
