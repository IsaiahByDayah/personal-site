import React from "react"
import { Meta, Story } from "@storybook/react/types-6-0"

import Index from "components/page-templates/Index"

export default {
  component: Index,
  title: "Page Templates/Index",
  parameters: {
    storyshots: {
      disable: true,
    },
  },
} as Meta

export const Basic: Story = () => <Index />
