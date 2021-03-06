import React from "react"
import { Meta, Story } from "@storybook/react/types-6-0"

import InsetBox, { InsetBoxProps } from "components/common/InsetBox"

export default {
  component: InsetBox,
  title: "Common/InsetBox",
  parameters: {
    layout: "centered",
  },
} as Meta

export const Basic: Story<InsetBoxProps> = args => <InsetBox {...args} />
Basic.args = {
  height: 200,
  width: 200,
  rounded: false,
}
