import { Meta, Story } from "@storybook/react"

import Header from "components/scaffold/Header"

export default {
  title: "Scaffold/Header",
} as Meta

export const Basic: Story = (args) => <Header {...args} />
