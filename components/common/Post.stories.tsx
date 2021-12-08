import { Meta, Story } from "@storybook/react"

import Post, { PostProps } from "components/common/Post"

export default {
  component: Post,
  title: "Components/Post",
  parameters: {
    layout: "centered",
  },
} as Meta

export const Minimal: Story<PostProps> = (args) => <Post {...args} />
Minimal.args = {
  title: "Some Title Goes Here",
  href: "/",
  publishDate: new Date("6/13/1993"),
  thumbnailProps: {
    alt: "some alt text",
    src: "https://picsum.photos/1920/1080",
  },
}

export const Basic: Story<PostProps> = (args) => <Post {...args} />
Basic.args = {
  ...Minimal.args,
  excerpt:
    "Sint laboris qui ut laboris fugiat proident laborum cupidatat commodo cupidatat mollit incididunt. Duis eu fugiat quis ipsum non enim adipisicing. Ea voluptate labore minim dolore occaecat nulla culpa sint nisi velit enim sunt reprehenderit consectetur. Minim pariatur fugiat esse quis Lorem mollit labore elit tempor duis anim quis elit cupidatat. Adipisicing excepteur qui ad id id laborum officia ullamco eiusmod dolor consequat sunt dolore mollit. Consectetur amet sint sit occaecat velit laboris ea irure ut dolor est. Laboris mollit et ullamco consequat elit irure sit dolore amet qui culpa minim incididunt deserunt.",
}
