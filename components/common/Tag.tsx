import { Chip } from "@mui/material"
import NextLink from "next/link"

import { linkResolver } from "prismicConfiguration"

import { TagDocument } from "lib/prismic/types"

export interface TagProps {
  tag: TagDocument
}

const Tag = ({ tag, ...rest }: TagProps) => (
  <NextLink href={linkResolver(tag)} passHref>
    <Chip
      color="primary"
      size="small"
      component="a"
      clickable
      label={tag.data.name}
    />
  </NextLink>
)

export default Tag
