import { ReactNode } from "react"
import { Theme, Stack, Divider, Typography } from "@mui/material"
import { SystemStyleObject } from "@mui/system"

import Post, { PostProps } from "components/common/Post"

export interface BlogrollProps {
  sx?: SystemStyleObject<Theme>
  posts?: Omit<PostProps, "sx">[]
  emptyMessage?: string
  children?: ReactNode
}

const Blogroll = ({ sx, posts, children }: BlogrollProps) => (
  <Stack sx={sx} divider={<Divider />} spacing={5}>
    {posts?.map((post, index) => (
      <Post key={`${post.title}-${index}`} {...post} />
    ))}
    {posts?.length === 0 && (
      <Typography align="center">{emptyMessage ?? "No posts."}</Typography>
    )}
    {children}
  </Stack>
)

export default Blogroll
