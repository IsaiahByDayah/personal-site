import { Meta, Story } from "@storybook/react"

import Closing, { ClosingProps } from "components/blog/Closing"

export default {
  component: Closing,
  title: "Blog/Closing",
  parameters: {
    layout: "centered",
    storyshots: {
      disable: true,
    },
  },
  args: {
    url: "https://www.isaiahsmith.dev",
    title: "Some Title",
  },
} as Meta

export const Basic: Story<ClosingProps> = (args) => <Closing {...args} />
