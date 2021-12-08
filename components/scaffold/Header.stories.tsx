import React from "react"
import { Meta, Story } from "@storybook/react/types-6-0"

import Header from "components/scaffold/Header"

export default {
  title: "Scaffold/Header",
} as Meta

export const Basic: Story = (args) => <Header {...args} />
