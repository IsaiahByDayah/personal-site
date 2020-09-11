import React from "react"
import { Meta, Story } from "@storybook/react/types-6-0"

import SideNavDrawerContent, { SideNavDrawerContentProps } from "components/scaffold/SideNavDrawerContent"

export default {
  component: SideNavDrawerContent,
  title: "Scaffold/SideNavDrawerContent",
  args: {
    title: "Isaiah Smith",
    avatar: "https://api.adorable.io/avatars/100/sample.png",
  },
} as Meta

export const Basic: Story<SideNavDrawerContentProps> = args => <SideNavDrawerContent {...args} />
