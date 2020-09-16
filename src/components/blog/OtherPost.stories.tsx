import React from "react"
import { Meta, Story } from "@storybook/react/types-6-0"

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
      src:
        "https://images.unsplash.com/photo-1522798435862-6283b845139c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=720",
      alt: "sample article thumbnail",
    },
  },
} as Meta

export const Basic: Story<OtherPostProps> = args => <OtherPost {...args} />
