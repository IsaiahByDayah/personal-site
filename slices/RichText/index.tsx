import { Content } from "@prismicio/client"
import { SliceComponentProps } from "@prismicio/react"

import MuiRichText from "components/common/MuiRichText"

const RichText = ({ slice }: SliceComponentProps<Content.RichTextSlice>) => (
  <MuiRichText field={slice.primary.content} />
)

export default RichText
