import { Meta, Story } from "@storybook/react"

import SideNavContent, {
  SideNavContentProps,
  SideNavContentBase,
  SideNavContentBaseProps,
} from "components/scaffold/SideNavContent"

export default {
  title: "Scaffold/SideNavContent",
  argTypes: {
    onClick: {},
  },
} as Meta

export const Basic: Story<SideNavContentBaseProps> = (args) => (
  <SideNavContentBase {...args} />
)
Basic.args = {
  title: "Site Title",
  avatar: "https://api.adorable.io/avatars/100/sample.png",
}

export const Default: Story<SideNavContentProps> = (args) => (
  <SideNavContent {...args} />
)
Default.parameters = {
  storyshots: {
    disable: true,
  },
}
