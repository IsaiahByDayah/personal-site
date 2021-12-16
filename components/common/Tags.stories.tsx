import { Meta, Story } from "@storybook/react"

import { TagDocument } from "lib/prismic/types"

import { TagsContext } from "components/scaffold/TagsProvider"

import Tags, { TagsProps } from "components/common/Tags"

export default {
  component: Tags,
  title: "Components/Tags",
  parameters: {
    layout: "centered",
  },
} as Meta

const Template: Story<{ tags?: TagDocument[] }> = ({ tags }) => (
  <TagsContext.Provider value={tags}>
    <Tags />
  </TagsContext.Provider>
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
    } as TagDocument,
    {
      id: "facilis",
      url: "/facilis",
      data: {
        name: "Facilis",
      },
    } as TagDocument,
    {
      id: "delectus",
      url: "/delectus",
      data: {
        name: "Delectus",
      },
    } as TagDocument,
    {
      id: "repudiandae",
      url: "/repudiandae",
      data: {
        name: "Repudiandae",
      },
    } as TagDocument,
    {
      id: "sunt",
      url: "/sunt",
      data: {
        name: "Sunt",
      },
    } as TagDocument,
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
