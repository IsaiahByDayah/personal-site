import { Content } from "@prismicio/client"
import { Meta, Story } from "@storybook/react"

import Tags from "components/common/Tags"

export default {
  component: Tags,
  title: "Components/Tags",
  parameters: {
    layout: "centered",
  },
} as Meta

const Template: Story<{ tags?: Content.TagDocument[] }> = ({ tags }) => (
  <Tags tags={tags} />
)

export const Basic = Template.bind({})
Basic.args = {
  tags: [
    {
      id: "molestias",
      url: "/molestias",
      data: {
        name: "Molestias",
      },
    } as Content.TagDocument,
    {
      id: "facilis",
      url: "/facilis",
      data: {
        name: "Facilis",
      },
    } as Content.TagDocument,
    {
      id: "delectus",
      url: "/delectus",
      data: {
        name: "Delectus",
      },
    } as Content.TagDocument,
    {
      id: "repudiandae",
      url: "/repudiandae",
      data: {
        name: "Repudiandae",
      },
    } as Content.TagDocument,
    {
      id: "sunt",
      url: "/sunt",
      data: {
        name: "Sunt",
      },
    } as Content.TagDocument,
  ],
}

export const Empty = Template.bind({})
Empty.args = {
  tags: [],
}

export const Loading = Template.bind({})
Loading.args = {
  tags: undefined,
}
