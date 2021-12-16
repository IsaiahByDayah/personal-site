import { PropsWithChildren } from "react"
import { Meta, Story } from "@storybook/react"

import { TagDocument } from "lib/prismic/types"

import Tag, { TagProps } from "components/common/Tag"

export default {
  component: Tag,
  title: "Components/Tag",
  parameters: {
    layout: "centered",
  },
} as Meta

const Template: Story<PropsWithChildren<TagProps>> = (args) => <Tag {...args} />

export const FromString = Template.bind({})
FromString.args = {
  tag: "voluptatum",
}

export const FromDocument = Template.bind({})
FromDocument.args = {
  tag: {
    data: {
      name: "Assumenda",
    },
    url: "/assumenda",
  } as TagDocument,
}
