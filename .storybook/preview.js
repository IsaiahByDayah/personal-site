import "typeface-nunito"

import ThemeDecorator from "decorators/ThemeDecorator"
import { action } from "@storybook/addon-actions"
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport"

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: { expanded: true, hideNoControlsWarning: true },
  viewport: {
    viewports: {
      ...INITIAL_VIEWPORTS,
    },
  },
  layout: "fullscreen",
}

export const globalTypes = {
  theme: {
    name: "Theme",
    description: "Change the global theme",
    defaultValue: "Light",
    toolbar: {
      icon: "paintbrush",
      // array of plain string values or MenuItem shape (see below)
      items: ["Light", "Dark"],
    },
  },
}

export const decorators = [ThemeDecorator]

// NOTE: This is needed to work with gatsby: https://www.gatsbyjs.com/docs/visual-testing-with-storybook/
// Gatsby's Link overrides:
// Gatsby Link calls the `enqueue` & `hovering` methods on the global variable ___loader.
// This global object isn't set in storybook context, requiring you to override it to empty functions (no-op),
// so Gatsby Link doesn't throw any errors.
global.___loader = {
  enqueue: () => {},
  hovering: () => {},
}
// This global variable is prevents the "__BASE_PATH__ is not defined" error inside Storybook.
global.__BASE_PATH__ = "/"
// Navigating through a gatsby app using gatsby-link or any other gatsby component will use the `___navigate` method.
// In Storybook it makes more sense to log an action than doing an actual navigate. Checkout the actions addon docs for more info: https://github.com/storybookjs/storybook/tree/master/addons/actions.
window.___navigate = pathname => {
  action("NavigateTo:")(pathname)
}
