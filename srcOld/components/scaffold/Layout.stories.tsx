import { Meta, Story } from "@storybook/react"

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
