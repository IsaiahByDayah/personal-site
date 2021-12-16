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
  primary: "Some Title Goes Here",
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
  secondary:
    "Sint laboris qui ut laboris fugiat proident laborum cupidatat commodo cupidatat mollit incididunt. Duis eu fugiat quis ipsum non enim adipisicing. Ea voluptate labore minim dolore occaecat nulla culpa sint nisi velit enim sunt reprehenderit consectetur. Minim pariatur fugiat esse quis Lorem mollit labore elit tempor duis anim quis elit cupidatat. Adipisicing excepteur qui ad id id laborum officia ullamco eiusmod dolor consequat sunt dolore mollit. Consectetur amet sint sit occaecat velit laboris ea irure ut dolor est. Laboris mollit et ullamco consequat elit irure sit dolore amet qui culpa minim incididunt deserunt.",
}
