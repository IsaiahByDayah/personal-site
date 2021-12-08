import { Meta, Story } from "@storybook/react"

import Drawer from "components/scaffold/Drawer"

export default {
  title: "Scaffold/Drawer",
  component: Drawer,
  parameters: {
    storyshots: { disable: true },
    viewport: {
      defaultViewport: "iphonex",
    },
  },
} as Meta

export const Basic: Story = (args) => <Drawer {...args} />
