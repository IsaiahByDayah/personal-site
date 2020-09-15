import React from "react"
import { Meta, Story } from "@storybook/react/types-6-0"

import Bio, { BioBase, BioBaseProps } from "components/blog/Bio"

export default {
  title: "Blog/Bio",
  parameters: {
    layout: "centered",
  },
} as Meta

export const Basic: Story<BioBaseProps> = args => <BioBase {...args} />

export const WithStatic: Story = () => <Bio />
WithStatic.parameters = {
  storyshots: {
    disabled: true,
  },
}
