import { ImgHTMLAttributes } from "react"
import { Theme, Box, Stack, Typography, Link } from "@mui/material"
import { SystemStyleObject } from "@mui/system"
import NextLink from "next/link"
import dayjs from "dayjs"

export interface BlogrollItemProps {
  sx?: SystemStyleObject<Theme>
  thumbnailProps: ImgHTMLAttributes<HTMLImageElement>
  meta?: string | Date
  primary: string
  secondary?: string
  href: string
}

const BlogrollItem = ({
  sx,
  thumbnailProps,
  meta,
  primary,
  secondary,
  href,
}: BlogrollItemProps) => {
  return (
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
            boxShadow={4}
            component="img"
            {...thumbnailProps}
          />
        </Link>
      </NextLink>
      {meta && (
        <Typography color="primary" variant="caption">
          {typeof meta === "string" ? meta : dayjs(meta).format("MMMM D, YYYY")}
        </Typography>
      )}
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
          {primary}
        </Link>
      </NextLink>
      {secondary && <Typography color="text.secondary">{secondary}</Typography>}
    </Stack>
  )
}

export default BlogrollItem
