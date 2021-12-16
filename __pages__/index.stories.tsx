import { Meta, Story } from "@storybook/react"

import Home, { HomeProps } from "pages/index"

import { BlogPostDocument } from "lib/prismic/types"

export default {
  title: "Pages/Home",
  component: Home,
  parameters: {
    storyshots: { disabled: true },
  },
} as Meta

export const Basic: Story<HomeProps> = (args) => <Home {...args} />
Basic.args = {
  totalPages: 5,
  blogPosts: [
    {
      uid: "vel-aut-sit",
      last_publication_date: new Date("6/13/1993").toISOString(),
      data: {
        title: "Libero est voluptatem eligendi voluptatibus a et.",
        thumbnail: {
          alt: "random alt text",
          url: "https://picsum.photos/1920/1080",
          copyright: null,
          dimensions: {
            height: 1080,
            width: 1920,
          },
        },
        excerpt:
          "Consectetur excepteur est elit amet et eu voluptate proident. Quis ipsum ea dolor magna reprehenderit nulla sint laboris nisi do. Labore Lorem minim dolor ullamco ullamco ullamco cupidatat esse eiusmod laborum anim excepteur. Occaecat ipsum ipsum non labore eu pariatur voluptate tempor. Amet aute consequat minim culpa consectetur est quis quis. Nisi sunt esse ea pariatur aute quis commodo nulla nulla laborum.",
      },
    } as BlogPostDocument,
  ],
}
