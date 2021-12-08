import { ComponentType, ReactNode } from "react"
import { DecoratorFunction } from "@storybook/addons"

const decorator = (Component: ComponentType): DecoratorFunction<ReactNode> => {
  const DecoratorFunc: DecoratorFunction<ReactNode> = (story, context) => (
    <Component {...context}>{story()}</Component>
  )
  return DecoratorFunc
}

export default decorator
