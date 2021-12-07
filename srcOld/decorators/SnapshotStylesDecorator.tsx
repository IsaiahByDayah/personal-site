import React, { FC } from "react"
import { StoryContext, Story } from "@storybook/react/types-6-0"
import { StylesProvider } from "@material-ui/core"
import { GenerateId } from "jss"

import { slugify } from "utils/string"

interface SnapshotStylesProviderProps extends StoryContext {
  kind: string
  story: string
}

const counts: { [key: string]: number } = {}

/*
	Generates a cascading unique classname per rule & per stylesheet & PER STORY
	Solves issue of generating ALL new storyshots due to changing 1 story
*/
const getGenerateClassName = ({ kind, story }: SnapshotStylesProviderProps): GenerateId => (rule, styleSheet) => {
  const key = slugify(
    `${kind}-${story}-${(styleSheet && styleSheet.options.classNamePrefix) || "NO STYLESHEET PROVIDED"}-${rule.key}`
  )
  const currentCount = counts[key] || 0
  const id = `${key}-${currentCount + 1}`
  counts[key] = currentCount + 1
  return id
}

const SnapshotStylesProvider: FC<SnapshotStylesProviderProps> = ({ children, ...rest }) => {
  return <StylesProvider generateClassName={getGenerateClassName(rest)}>{children}</StylesProvider>
}

const SnapshotStylesDecorator = (Story: Story, context: StoryContext): JSX.Element => {
  return (
    <SnapshotStylesProvider {...(context as SnapshotStylesProviderProps)}>
      <Story />
    </SnapshotStylesProvider>
  )
}

export default SnapshotStylesDecorator
