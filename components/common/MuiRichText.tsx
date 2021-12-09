import { RichText, RichTextProps } from "prismic-reactjs"

import { htmlSerializer } from "lib/prismicHelpers"

const MuiRichText = (props: RichTextProps) => (
  <RichText htmlSerializer={htmlSerializer} {...props} />
)

export default MuiRichText
