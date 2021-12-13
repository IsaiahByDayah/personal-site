import { PrismicRichText, PrismicRichTextProps } from "@prismicio/react"

import { richTextComponents } from "lib/prismicHelpers"

const MuiRichText = (props: PrismicRichTextProps) => (
  <PrismicRichText components={richTextComponents} {...props} />
)

export default MuiRichText
