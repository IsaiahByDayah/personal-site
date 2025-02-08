import { Meta, Story } from "@storybook/react"
import Project, { ProjectProps } from "src/pages/project/[slug]"

import { generateProjectDocument } from "lib/prismic/util"

export default {
  title: "Pages/Project",
  component: Project,
  parameters: {
    storyshots: { disable: true },
  },
} as Meta

const Template: Story<ProjectProps> = (args) => <Project {...args} />

export const Basic = Template.bind({})
Basic.args = {
  project: generateProjectDocument(),
}

export const Updated = Template.bind({})
Updated.args = {
  ...Basic.args,
  project: generateProjectDocument({
    last_publication_date: new Date("12/25/2000").toISOString(),
  }),
}
