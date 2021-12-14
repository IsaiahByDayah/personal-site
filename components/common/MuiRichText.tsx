import { PrismicRichText, PrismicRichTextProps } from "@prismicio/react"

import { richTextComponents } from "lib/prismic/util"

const MuiRichText = (props: PrismicRichTextProps) => (
  <PrismicRichText components={richTextComponents} {...props} />
)

export default MuiRichText
