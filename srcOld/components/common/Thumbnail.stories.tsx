import { Meta, Story } from "@storybook/react"

import Thumbnail, { ThumbnailProps } from "components/common/Thumbnail"

export default {
  component: Thumbnail,
  title: "Common/Thumbnail",
  parameters: {
    layout: "centered",
  },
  argTypes: {
    aspectRatio: {
      control: {
        type: "range",
        min: 0.2,
        max: 5,
        step: 0.1,
      },
    },
  },
  args: {
    src: "https://images.unsplash.com/photo-1522798435862-6283b845139c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=720",
    alt: "sample article thumbnail",
  },
} as Meta

export const Basic: Story<ThumbnailProps> = (args) => <Thumbnail {...args} />
