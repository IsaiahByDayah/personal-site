import React, { ComponentType, ReactNode } from "react"
import { DecoratorFunction, StoryContext } from "@storybook/addons"

export const decorator = (Component: ComponentType<StoryContext>): DecoratorFunction<ReactNode> => (story, context) => (
  <Component {...context}>{story()}</Component>
)
