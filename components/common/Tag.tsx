import { Chip } from "@mui/material"
import NextLink from "next/link"

import { linkResolver } from "prismicConfiguration"

import { TagDocument } from "lib/prismic/types"

export interface TagProps {
  tag: TagDocument | string
}

const Tag = ({ tag }: TagProps) => {
  if (typeof tag === "string") {
    return <Chip color="primary" size="small" variant="outlined" label={tag} />
  }

  return (
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
}

export default Tag
