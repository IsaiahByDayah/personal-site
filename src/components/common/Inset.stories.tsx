import { Meta, Story } from "@storybook/react"

import {
  InsetBox,
  InsetBoxProps,
  InsetStack,
  InsetStackProps,
} from "components/common/Inset"

export default {
  title: "Components/Inset",
  parameters: {
    layout: "centered",
  },
} as Meta

export const Box: Story<InsetBoxProps> = (args) => <InsetBox {...args} />
Box.args = {
  variant: "all",
  height: 200,
  width: 200,
}

export const Stack: Story<InsetStackProps> = (args) => <InsetStack {...args} />
Stack.args = {
  variant: "all",
  height: 200,
  width: 200,
}
