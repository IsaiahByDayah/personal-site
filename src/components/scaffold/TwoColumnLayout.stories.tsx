import React from "react"
import { Meta, Story } from "@storybook/react/types-6-0"

import TwoColumnLayout from "components/scaffold/TwoColumnLayout"

export default {
  component: TwoColumnLayout,
  title: "Scaffold/TwoColumnLayout",
  parameters: {
    storyshots: {
      disable: true,
    },
  },
} as Meta

export const Basic: Story = () => <TwoColumnLayout>Hello, World!</TwoColumnLayout>
