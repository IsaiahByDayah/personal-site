import { SliceComponentProps } from "@prismicio/react"
import { Slice, RichTextField } from "@prismicio/types"

import MuiRichText from "components/common/MuiRichText"

export type RichTextSlice = Slice<
  "rich_text",
  {
    content: RichTextField
  }
>

const RichText = ({ slice }: SliceComponentProps<RichTextSlice>) => (
  <MuiRichText field={slice.primary.content} />
)

export default RichText
