import { Meta, Story } from "@storybook/react"

import Navigation, { NavigationProps } from "components/scaffold/Navigation"

export default {
  component: Navigation,
  title: "Scaffold/Navigation",
  parameters: {
    layout: "centered",
  },
} as Meta

export const Basic: Story<NavigationProps> = (args) => <Navigation {...args} />
