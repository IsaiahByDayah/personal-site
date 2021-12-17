import { Meta, Story } from "@storybook/react"

import About from "components/page-templates/About"

export default {
  component: About,
  title: "Page Templates/About",
  parameters: {
    storyshots: {
      disable: true,
    },
  },
} as Meta

export const Basic: Story = () => <About />
