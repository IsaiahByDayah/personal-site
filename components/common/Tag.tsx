import { Chip } from "@mui/material"
import { Content } from "@prismicio/client"
import NextLink from "next/link"

import { linkResolver } from "lib/prismic/util"

export interface TagProps {
  tag: Content.TagDocument | string
}

const Tag = ({ tag }: TagProps) => {
  if (typeof tag === "string") {
    return <Chip color="primary" size="small" variant="outlined" label={tag} />
  }

  return (
    <Chip
      color="primary"
      size="small"
      component={NextLink}
      href={linkResolver(tag)}
      clickable
      label={tag.data.name}
    />
  )
}

export default Tag
