// NOTE: Current Storybook addons aren't updated for NextJS v12 so using custom one
// REF: https://github.com/lifeiscontent/storybook-addon-next-router/blob/master/src/decorators.tsx

import { action } from "@storybook/addon-actions"
import { Story, StoryContext } from "@storybook/react"
import { RouterContext } from "next/dist/shared/lib/router-context"
import Router, { NextRouter } from "next/router"
import type { JSX } from "react"

const NextRouterDecorator = (
  Story: Story,
  context: StoryContext,
): JSX.Element => {
  const parameters = context.parameters.nextRouter ?? {}

  Router.router = {
    locale: "en",
    route: "/",
    pathname: "/",
    query: {},
    asPath: "/",
    push(...args: unknown[]) {
      action("nextRouter.push")(...args)
      return Promise.resolve(true)
    },
    replace(...args: unknown[]) {
      action("nextRouter.replace")(...args)
      return Promise.resolve(true)
    },
    reload(...args: unknown[]) {
      action("nextRouter.reload")(...args)
    },
    back(...args: unknown[]) {
      action("nextRouter.back")(...args)
    },
    prefetch(...args: unknown[]) {
      action("nextRouter.prefetch")(...args)
      return Promise.resolve()
    },
    beforePopState(...args: unknown[]) {
      action("nextRouter.beforePopState")(...args)
    },
    events: {
      on(...args: unknown[]) {
        action("nextRouter.events.on")(...args)
      },
      off(...args: unknown[]) {
        action("nextRouter.events.off")(...args)
      },
      emit(...args: unknown[]) {
        action("nextRouter.events.emit")(...args)
      },
    },
    isFallback: false,
    ...parameters,
  }

  return (
    <RouterContext.Provider value={Router.router as NextRouter}>
      <Story />
    </RouterContext.Provider>
  )
}

export default NextRouterDecorator
