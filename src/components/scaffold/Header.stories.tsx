import React from "react"
import { Meta, Story } from "@storybook/react/types-6-0"

import { HeaderBase, HeaderBaseProps } from "components/scaffold/Header"

export default {
  component: HeaderBase,
  title: "Scaffold/Header",
  args: {
    title: "Isaiah Smith",
    avatar: "https://api.adorable.io/avatars/100/sample.png",
  },
} as Meta

const Template: Story<HeaderBaseProps> = args => <HeaderBase {...args} />

export const Basic = Template.bind({})

export const Simple = Template.bind({})
Simple.args = {
  simple: true,
}

export const Complex = Template.bind({})
Complex.args = {
  simple: false,
}
