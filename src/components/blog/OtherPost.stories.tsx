import React from "react"
import { Meta, Story } from "@storybook/react/types-6-0"
import { Box } from "@material-ui/core"

import OtherPost, { OtherPostProps } from "components/blog/OtherPost"

export default {
  component: OtherPost,
  title: "Blog/OtherPost",
  parameters: {
    layout: "centered",
  },
  args: {
    to: "/",
    title: "Some Title",
    thumbnail: {
      src: "https://images.unsplash.com/photo-1522798435862-6283b845139c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=720",
      alt: "sample article thumbnail",
    },
  },
} as Meta

export const Basic: Story<OtherPostProps> = args => <OtherPost {...args} />

export const CappedWidth: Story<OtherPostProps & { maxWidth: number }> = ({ maxWidth, ...args }) => (
  <Box maxWidth={maxWidth}>
    <OtherPost {...args} />
  </Box>
)
CappedWidth.args = {
  maxWidth: 300,
  title: "Esse enim ad esse amet duis consequat veniam nostrud fugiat",
}
