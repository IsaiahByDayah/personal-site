import { Box, Stack, Theme, Typography } from "@mui/material"
import { SystemStyleObject } from "@mui/system"
import { Content } from "@prismicio/client"
import { HiOutlineArrowSmLeft, HiOutlineArrowSmRight } from "react-icons/hi"

import BlogrollItem from "components/common/BlogrollItem"

export interface OtherPostsProps {
  sx?: SystemStyleObject<Theme>
  previous?: Content.BlogPostDocument | null
  next?: Content.BlogPostDocument | null
  disableArrows?: boolean
  previousLabel?: string
  nextLabel?: string
}

const OtherPosts = ({
  sx,
  previous,
  next,
  disableArrows,
  previousLabel = "Prev",
  nextLabel = "Next",
}: OtherPostsProps) => {
  if (!previous && !next) return null
  return (
    <Stack sx={sx} spacing={2}>
      <Typography align="center" fontStyle="italic">
        Looking for more?
      </Typography>
      <Stack direction="row" spacing={1} justifyContent="space-between">
        {previous && (
          <Stack maxWidth={({ spacing }) => spacing(35)} spacing={1}>
            <Stack direction="row" alignItems="center" spacing={1}>
              {!disableArrows && <HiOutlineArrowSmLeft />}
              <Typography>{previousLabel}</Typography>
            </Stack>
            <BlogrollItem
              thumbnailProps={{
                src: previous.data.thumbnail.url ?? undefined,
                alt: previous.data.thumbnail.alt ?? undefined,
              }}
              href={previous.url ?? "/"}
              primary={previous.data.title ?? ""}
            />
          </Stack>
        )}
        <Box />
        {next && (
          <Stack
            alignItems="flex-end"
            maxWidth={({ spacing }) => spacing(35)}
            spacing={1}
          >
            <Stack direction="row" alignItems="center" spacing={1}>
              <Typography>{nextLabel}</Typography>
              {!disableArrows && <HiOutlineArrowSmRight />}
            </Stack>
            <BlogrollItem
              thumbnailProps={{
                src: next.data.thumbnail.url ?? undefined,
                alt: next.data.thumbnail.alt ?? undefined,
              }}
              href={next.url ?? "/"}
              primary={next.data.title ?? ""}
            />
          </Stack>
        )}
      </Stack>
    </Stack>
  )
}

export default OtherPosts
