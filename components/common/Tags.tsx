import { Box, Grid, Theme, Typography } from "@mui/material"
import { SystemStyleObject } from "@mui/system"
import { Content } from "@prismicio/client"

import Tag from "components/common/Tag"

export type TagsProps = {
  sx?: SystemStyleObject<Theme>
  label?: string | false
  tags?: (Content.TagDocument | string)[]
}

export const Tags = ({ sx, label = "Tags", tags }: TagsProps) => {
  if (tags === undefined) return null

  return (
    <Box sx={sx}>
      {label !== false && (
        <Typography fontWeight={900} variant="h5" marginBottom={1}>
          {label}
        </Typography>
      )}
      <Grid container spacing={1}>
        {tags.map((tag: string | TagDocument) => (
          <Grid key={typeof tag === "string" ? tag : tag.id} item>
            <Tag tag={tag} />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default Tags
