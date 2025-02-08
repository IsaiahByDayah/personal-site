import { Meta, Story } from "@storybook/react"

import Home, { HomeProps } from "src/pages/index"

import { generateBlogPostDocument } from "lib/prismic/util"

export default {
  title: "Pages/Home",
  component: Home,
  parameters: {
    storyshots: { disable: true },
  },
} as Meta

export const Basic: Story<HomeProps> = (args) => <Home {...args} />
Basic.args = {
  totalPages: 5,
  blogPosts: [
    generateBlogPostDocument(),
    generateBlogPostDocument({
      uid: "officia-velit-omnis",
      last_publication_date: new Date("12/25/2000").toISOString(),
    }),
  ],
}
