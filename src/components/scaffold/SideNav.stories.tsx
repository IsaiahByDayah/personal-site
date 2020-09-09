import React, { PropsWithChildren } from "react"
import { Meta, Story } from "@storybook/react/types-6-0"

import { SideNavBase, SideNavBaseProps } from "components/scaffold/SideNav"
import SideNavButton, { SideNavButtonProps } from "components/scaffold/SideNavButton"

export default {
  title: "Scaffold/SideNav",
} as Meta

export const Nav: Story<SideNavBaseProps> = args => <SideNavBase {...args} />
Nav.argTypes = {
  onClose: {},
}
Nav.args = {
  open: true,
  title: "Isaiah Smith",
  avatar: "https://api.adorable.io/avatars/100/sample.png",
}

export const Button: Story<PropsWithChildren<SideNavButtonProps>> = args => <SideNavButton {...args} />
Button.argTypes = {
  onClick: {},
}
Button.args = {
  children: "Label",
  to: "/",
}
Button.parameters = {
  layout: "centered",
}
