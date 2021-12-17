import { Meta, Story } from "@storybook/react"

import Home, { HomeProps } from "components/page-templates/Home"

const samplePost = {
  primary: "Veniam Lorem consequat dolor Lorem occaecat",
  secondary: "December 25, 2000",
  excerpt:
    "Occaecat occaecat ad nulla sint magna veniam sit cupidatat sunt nisi tempor eiusmod. Esse nostrud laboris voluptate tempor excepteur qui dolore sint magna ea voluptate. Culpa adipisicing amet...",
  to: "/",
  thumbnail: {
    src: "https://source.unsplash.com/random/1080x720",
    alt: "random upsplash photo",
  },
}

export default {
  component: Home,
  title: "Page Templates/Home",
  parameters: {
    storyshots: {
      disable: true,
    },
  },
  args: {
    posts: [
      {
        ...samplePost,
        key: "post-1",
      },
      {
        ...samplePost,
        key: "post-2",
      },
      {
        ...samplePost,
        key: "post-3",
      },
    ],
  },
} as Meta

export const Basic: Story<HomeProps> = (args) => <Home {...args} />
