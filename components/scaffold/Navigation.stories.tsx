import React from "react"
import { Meta, Story } from "@storybook/react/types-6-0"

import Navigation, { NavigationProps } from "components/scaffold/Navigation"

export default {
  component: Navigation,
  title: "Scaffold/Navigation",
  parameters: {
    layout: "centered",
  },
} as Meta

export const Basic: Story<NavigationProps> = (args) => <Navigation {...args} />
