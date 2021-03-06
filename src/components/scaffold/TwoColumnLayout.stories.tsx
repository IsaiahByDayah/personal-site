import React from "react"
import { Meta, Story } from "@storybook/react/types-6-0"

import { TwoColumnLayoutBase, TwoColumnLayoutBaseProps } from "components/scaffold/TwoColumnLayout"

export default {
  component: TwoColumnLayoutBase,
  title: "Scaffold/TwoColumnLayout",
} as Meta

export const Basic: Story<TwoColumnLayoutBaseProps> = args => (
  <TwoColumnLayoutBase {...args}>Hello, World!</TwoColumnLayoutBase>
)
Basic.args = {
  side: "The Side",
}
