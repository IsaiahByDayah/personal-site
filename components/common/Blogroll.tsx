import { ReactNode } from "react"
import { Theme, Stack, Divider, Typography } from "@mui/material"
import { SystemStyleObject } from "@mui/system"

import BlogrollItem, { BlogrollItemProps } from "components/common/BlogrollItem"

export interface BlogrollProps {
  sx?: SystemStyleObject<Theme>
  items?: Omit<BlogrollItemProps, "sx">[]
  emptyMessage?: string
  children?: ReactNode
}

const Blogroll = ({ sx, items, emptyMessage, children }: BlogrollProps) => (
  <Stack sx={sx} divider={<Divider />} spacing={5}>
    {items?.map((item, index) => (
      <BlogrollItem key={`${item.title}-${index}`} {...item} />
    ))}
    {items?.length === 0 && (
      <Typography align="center">{emptyMessage ?? "No Items."}</Typography>
    )}
    {children}
  </Stack>
)

export default Blogroll
