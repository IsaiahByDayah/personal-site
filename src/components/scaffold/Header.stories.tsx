import React from "react"
import { Meta, Story } from "@storybook/react/types-6-0"

import { HeaderBase, HeaderBaseProps } from "components/scaffold/Header"

export default {
  component: HeaderBase,
  title: "Scaffold/Header",
} as Meta

export const Basic: Story<HeaderBaseProps> = args => <HeaderBase {...args} />
Basic.args = {
  title: "Isaiah Smith",
  avatar: "https://api.adorable.io/avatars/100/sample.png",
}
