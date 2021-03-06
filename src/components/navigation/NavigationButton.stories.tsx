import React, { PropsWithChildren } from "react"
import { Meta, Story } from "@storybook/react/types-6-0"

import NavigationButton, { NavigationButtonProps } from "components/navigation/NavigationButton"

export default {
  component: NavigationButton,
  title: "Navigation/NavigationButton",
} as Meta

export const Basic: Story<PropsWithChildren<NavigationButtonProps>> = args => <NavigationButton {...args} />
Basic.argTypes = {
  onClick: {},
}
Basic.args = {
  children: "Label",
  to: "/",
}
Basic.parameters = {
  layout: "centered",
}
