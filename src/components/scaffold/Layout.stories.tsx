import React from "react"
import { Meta, Story } from "@storybook/react/types-6-0"

import Layout from "components/scaffold/Layout"

export default {
  component: Layout,
  title: "Scaffold/Layout",
  parameters: {
    storyshots: {
      disable: true,
    },
  },
} as Meta

export const Basic: Story = () => <Layout>Hello, World!</Layout>
