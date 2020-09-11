import React from "react"
import { Meta, Story } from "@storybook/react/types-6-0"

import Header, { HeaderProps } from "components/scaffold/Header"

export default {
  component: Header,
  title: "Scaffold/Header",
} as Meta

const Template: Story<HeaderProps> = args => <Header {...args} />

export const Basic = Template.bind({})

export const Simple = Template.bind({})
Simple.args = {
  simple: true,
}

export const Complex = Template.bind({})
Complex.args = {
  simple: false,
}
