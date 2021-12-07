import { Meta, Story } from "@storybook/react"

import Home from "pages/index"

export default {
  title: "Pages/Home",
  component: Home,
  parameters: {
    layout: "fullscreen",
  },
} as Meta

export const Basic: Story = args => <Home {...args} />
