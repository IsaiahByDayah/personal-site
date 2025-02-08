import { Theme } from "@mui/material"
import { SystemStyleObject } from "@mui/system"
import {
  JSXMapSerializer,
  PrismicRichText,
  PrismicRichTextProps,
} from "@prismicio/react"

import { richTextComponents } from "lib/prismic/util"

export interface MuiRichTextProps extends PrismicRichTextProps {
  getSx?: (type: keyof JSXMapSerializer) => SystemStyleObject<Theme>
}

const MuiRichText = ({ getSx, ...props }: MuiRichTextProps) => (
  <PrismicRichText components={richTextComponents(getSx)} {...props} />
)

export default MuiRichText
