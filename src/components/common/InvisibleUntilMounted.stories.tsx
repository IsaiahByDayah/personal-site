import { Meta, Story } from "@storybook/react"

import InvisibleUntilMounted from "components/common/InvisibleUntilMounted"

export default {
  title: "Components/InvisibleUntilMounted",
  component: InvisibleUntilMounted,
  parameters: {
    layout: "padded",
  },
} as Meta

export const Basic: Story = (args) => (
  <InvisibleUntilMounted {...args}>Content goes here.</InvisibleUntilMounted>
)
