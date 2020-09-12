import React from "react"
import { Meta, Story } from "@storybook/react/types-6-0"

import Post, { PostProps } from "components/common/Post"

export default {
  component: Post,
  title: "Common/Post",
  parameters: {
    layout: "centered",
  },
  argTypes: {
    thumbnail: {
      control: "object",
    },
    primary: {
      control: "text",
    },
    secondary: {
      control: "text",
    },
    excerpt: {
      control: "text",
    },
  },
  args: {
    thumbnail: {
      src:
        "https://images.unsplash.com/photo-1522798435862-6283b845139c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=720",
      alt: "sample article thumbnail",
    },
    primary: "Velit pariatur ut amet adipisicing dolore laborum quis duis",
    secondary: "December 25, 2000",
    excerpt:
      "Labore sint proident id enim voluptate cupidatat voluptate nulla ullamco eiusmod. Adipisicing esse esse enim esse Lorem veniam excepteur in ipsum et qui ad. Laboris exercitation mollit amet officia duis et qui aliquip incididunt proident aliqua esse ad nisi.",
  },
} as Meta

export const Basic: Story<PostProps> = args => <Post {...args} />
