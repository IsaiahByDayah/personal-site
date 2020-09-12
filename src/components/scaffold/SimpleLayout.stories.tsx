import React from "react"
import { Meta, Story } from "@storybook/react/types-6-0"

import SimpleLayout from "components/scaffold/SimpleLayout"

export default {
  component: SimpleLayout,
  title: "Scaffold/SimpleLayout",
  parameters: {
    storyshots: {
      disable: true,
    },
  },
} as Meta

export const Basic: Story = () => <SimpleLayout>Hello, World!</SimpleLayout>
