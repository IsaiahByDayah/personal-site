import { Meta, Story } from "@storybook/react"
import { PropsWithChildren } from "react"

import OtherPosts, { OtherPostsProps } from "components/common/OtherPosts"
import { generateBlogPostDocument } from "lib/prismic/util"

export default {
  component: OtherPosts,
  title: "Components/OtherPosts",
} as Meta

const Template: Story<PropsWithChildren<OtherPostsProps>> = (args) => (
  <OtherPosts {...args} />
)

export const Both = Template.bind({})
Both.args = {
  previous: generateBlogPostDocument(),
  next: generateBlogPostDocument(),
}

export const PreviousOnly = Template.bind({})
PreviousOnly.args = {
  previous: generateBlogPostDocument(),
}

export const NextOnly = Template.bind({})
NextOnly.args = {
  next: generateBlogPostDocument(),
}

export const Neither = Template.bind({})
Neither.args = {}
