import { useContext } from "react"
import { Theme, Grid, Box, Typography } from "@mui/material"
import { SystemStyleObject } from "@mui/system"

import { TagDocument } from "lib/prismic/types"

import { TagsContext } from "components/scaffold/TagsProvider"

import Tag from "components/common/Tag"

export type TagsProps = {
  sx?: SystemStyleObject<Theme>
  label?: string | false
}

export const Tags = ({ sx, label = "Tags" }: TagsProps) => {
  const tags = useContext(TagsContext)

  if (tags === undefined) return null

  return (
    <Box sx={sx}>
      {label !== false && (
        <Typography fontWeight={900} variant="h5" marginBottom={1}>
          {label}
        </Typography>
      )}
      <Grid container spacing={1}>
        {tags.map((tag) => (
          <Grid key={tag.id} item>
            <Tag tag={tag} />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default Tags
