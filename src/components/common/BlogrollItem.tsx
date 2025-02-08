import { Box, Link, Stack, Theme, Typography } from "@mui/material"
import { SystemStyleObject } from "@mui/system"
import { Content } from "@prismicio/client"
import dayjs from "dayjs"
import NextLink from "next/link"
import { ImgHTMLAttributes } from "react"

import Tags from "components/common/Tags"

export interface BlogrollItemProps {
  sx?: SystemStyleObject<Theme>
  thumbnailProps: ImgHTMLAttributes<HTMLImageElement>
  meta?: string | Date
  primary: string
  secondary?: string
  href: string
  tags?: (Content.TagDocument | string)[]
}

const BlogrollItem = ({
  sx,
  thumbnailProps,
  meta,
  primary,
  secondary,
  href,
  tags,
}: BlogrollItemProps) => {
  return (
    <Stack sx={sx} spacing={1}>
      <Link
        sx={{
          display: "flex",
          textDecoration: "none",
          "&:hover": {
            textDecoration: "underline",
          },
          "&:link": {
            color: "text.primary",
          },
          "&:visited": {
            color: "text.primary",
          },
        }}
        component={NextLink}
        href={href}
      >
        <Box
          width={1}
          borderRadius={1}
          boxShadow={4}
          sx={{ aspectRatio: "16 / 9", objectFit: "cover" }}
          component="img"
          {...thumbnailProps}
        />
      </Link>
      {meta && (
        <Typography color="primary" variant="caption">
          {typeof meta === "string" ? meta : dayjs(meta).format("MMMM D, YYYY")}
        </Typography>
      )}
      <Link
        sx={{
          textDecoration: "none",
          "&:hover": {
            textDecoration: "underline",
          },
          "&:link": {
            color: "text.primary",
          },
          "&:visited": {
            color: "text.primary",
          },
        }}
        variant="h6"
        fontWeight={900}
        component={NextLink}
        href={href}
      >
        {primary}
      </Link>

      {secondary && <Typography color="text.secondary">{secondary}</Typography>}
      <Tags label={false} tags={tags} />
    </Stack>
  )
}

export default BlogrollItem
