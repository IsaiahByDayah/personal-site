import { Meta, Story } from "@storybook/react"

import Footer from "components/scaffold/Footer"

export default {
  title: "Scaffold/Footer",
  component: Footer,
} as Meta

export const Basic: Story = () => <Footer _testYear={1993} />
