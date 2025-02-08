import { DecoratorFunction } from "@storybook/addons"
import { ComponentType, ReactNode } from "react"

const decorator = (
  // TODO: Improve types so we aren't using `any`
  Component: ComponentType<any>
): DecoratorFunction<ReactNode> => {
  const DecoratorFunc: DecoratorFunction<ReactNode> = (story, context) => (
    <Component {...context}>{story()}</Component>
  )
  return DecoratorFunc
}

export default decorator
