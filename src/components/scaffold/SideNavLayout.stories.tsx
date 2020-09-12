import React from "react"
import { Meta, Story } from "@storybook/react/types-6-0"

import SideNavLayout from "components/scaffold/SideNavLayout"

export default {
  component: SideNavLayout,
  title: "Scaffold/SideNavLayout",
  parameters: {
    storyshots: {
      disable: true,
    },
  },
} as Meta

export const Basic: Story = () => <SideNavLayout>Hello, World!</SideNavLayout>
