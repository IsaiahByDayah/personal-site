import React from "react"
import { Meta, Story } from "@storybook/react/types-6-0"

import Socials, { SocialsProps } from "components/common/Socials"

export default {
  component: Socials,
  title: "Common/Socials",
  parameters: {
    layout: "centered",
  },
} as Meta

export const Basic: Story<SocialsProps> = args => <Socials {...args} />
