import React from "react"
import { Meta, Story } from "@storybook/react/types-6-0"

import { SideNavDrawerContentBase, SideNavDrawerContentBaseProps } from "components/scaffold/SideNavDrawerContent"

export default {
  component: SideNavDrawerContentBase,
  title: "Scaffold/SideNavDrawerContent",
  args: {
    title: "Isaiah Smith",
    avatar: "https://api.adorable.io/avatars/100/sample.png",
  },
} as Meta

export const Basic: Story<SideNavDrawerContentBaseProps> = args => <SideNavDrawerContentBase {...args} />
