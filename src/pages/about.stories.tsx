import React from "react"
import { Meta, Story } from "@storybook/react/types-6-0"

import About from "pages/about"

export default {
  component: About,
  title: "Pages/About",
} as Meta

export const Basic: Story = args => <About />
