import React from "react"
import { Meta, Story } from "@storybook/react/types-6-0"

import Closing, { ClosingProps } from "components/blog/Closing"

export default {
  component: Closing,
  title: "Blog/Closing",
  parameters: {
    layout: "centered",
  },
  args: {
    url: "https://www.isaiahsmith.dev",
    title: "Some Title",
  },
} as Meta

export const Basic: Story<ClosingProps> = args => <Closing {...args} />
