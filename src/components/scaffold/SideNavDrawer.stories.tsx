import React from "react"
import { Meta, Story } from "@storybook/react/types-6-0"

import { SideNavDrawerBase, SideNavDrawerBaseProps } from "components/scaffold/SideNavDrawer"

export default {
  title: "Scaffold/SideNav",
} as Meta

export const Basic: Story<SideNavDrawerBaseProps> = args => <SideNavDrawerBase {...args} />
Basic.argTypes = {
  onClose: {},
}
Basic.args = {
  open: true,
  title: "Isaiah Smith",
  avatar: "https://api.adorable.io/avatars/100/sample.png",
}
