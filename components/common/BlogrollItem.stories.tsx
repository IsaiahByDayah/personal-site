import { Meta, Story } from "@storybook/react"

import BlogrollItem, { BlogrollItemProps } from "components/common/BlogrollItem"

export default {
  component: BlogrollItem,
  title: "Components/BlogrollItem",
  parameters: {
    layout: "centered",
  },
} as Meta

export const Minimal: Story<BlogrollItemProps> = (args) => (
  <BlogrollItem {...args} />
)
Minimal.args = {
  primary: "Primary Text Here",
  href: "/",
  meta: new Date("6/13/1993"),
  thumbnailProps: {
    alt: "some alt text",
    src: "https://picsum.photos/1920/1080",
  },
}

export const Basic: Story<BlogrollItemProps> = (args) => (
  <BlogrollItem {...args} />
)
Basic.args = {
  ...Minimal.args,
  meta: "Custom meta information",
  tags: ["hello", "world"],
  secondary:
    "Secondary text here. In dolorem consequatur non. Est non ex magni quibusdam numquam non dolor et quos. Occaecati vel qui.",
}
