import { ImgHTMLAttributes } from "react"
import { Theme, Box, Stack, Typography, Link } from "@mui/material"
import { SystemStyleObject } from "@mui/system"
import NextLink from "next/link"
import dayjs from "dayjs"

export interface PostProps {
  sx?: SystemStyleObject<Theme>
  thumbnailProps: ImgHTMLAttributes<HTMLImageElement>
  publishDate: Date
  title: string
  excerpt?: string
  href: string
}

const Post = ({
  sx,
  thumbnailProps,
  publishDate,
  title,
  excerpt,
  href,
}: PostProps) => (
  <Stack sx={sx} spacing={1}>
    <NextLink href={href} passHref>
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
      >
        <Box
          width={1}
          borderRadius={1}
          boxShadow={2}
          component="img"
          {...thumbnailProps}
        />
      </Link>
    </NextLink>
    <Typography color="primary" variant="caption">
      {dayjs(publishDate).format("MMMM D, YYYY")}
    </Typography>
    <NextLink href={href} passHref>
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
      >
        {title}
      </Link>
    </NextLink>
    {excerpt && <Typography color="text.secondary">{excerpt}</Typography>}
  </Stack>
)

export default Post
