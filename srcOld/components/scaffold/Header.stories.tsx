import React from "react"
import { Meta, Story } from "@storybook/react/types-6-0"

import Header, { HeaderBase, HeaderBaseProps } from "components/scaffold/Header"

export default {
  title: "Scaffold/Header",
} as Meta

const Template: Story<HeaderBaseProps> = args => <HeaderBase {...args} />

export const Basic = Template.bind({})
Basic.args = {
  title: "Site Title",
  avatar: "https://api.adorable.io/avatars/100/sample.png",
}

export const Simple = Template.bind({})
Simple.args = {
  ...Basic.args,
  simple: true,
}

export const Complex = Template.bind({})
Complex.args = {
  ...Basic.args,
  simple: false,
}

export const Default: Story = () => <Header />
Default.parameters = {
  storyshots: {
    disable: true,
  },
}
