import React from "react"
import { Meta, Story } from "@storybook/react/types-6-0"

import About from "components/page-templates/About"

export default {
  component: About,
  title: "Page Templates/About",
  // parameters: {
  //   storyshots: {
  //     disable: true,
  //   },
  // },
} as Meta

export const Basic: Story = () => <About />
