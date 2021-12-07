import { ComponentType, ReactNode } from "react"
import { DecoratorFunction, StoryContext } from "@storybook/addons"

const decorator = (Component: ComponentType<StoryContext>): DecoratorFunction<ReactNode> => {
  const DecoratorFunc: DecoratorFunction<ReactNode> = (story, context) => <Component {...context}>{story()}</Component>
  return DecoratorFunc
}

export default decorator
