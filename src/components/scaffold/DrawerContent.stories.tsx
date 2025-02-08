import { Meta, Story } from "@storybook/react"

import DrawerContent from "components/scaffold/DrawerContent"

export default {
  title: "Scaffold/DrawerContent",
  component: DrawerContent,
  parameters: {
    layout: "fullscreen",
    viewport: {
      defaultViewport: "iphonex",
    },
  },
} as Meta

export const Basic: Story = (args) => <DrawerContent {...args} />
