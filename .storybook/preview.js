import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport"

import decorator from "lib/decorator"

import CssBaselined from "components/scaffold/CssBaselined"
import ThemeProvider from "components/scaffold/ThemeProvider"

import ThemeSelectionDecorator from "components/storybook-decorators/ThemeSelectionDecorator"
import DrawerDecorator from "components/storybook-decorators/DrawerDecorator"
import NextRouterDecorator from "components/storybook-decorators/NextRouterDecorator"

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: { expanded: true, hideNoControlsWarning: true },
  viewport: {
    viewports: {
      ...INITIAL_VIEWPORTS,
      HD: {
        name: "1080p",
        styles: { height: "1080px", width: "1920px" },
        type: "desktop",
      },
      UHD: {
        name: "1440p",
        styles: { height: "1440px", width: "2560px" },
        type: "desktop",
      },
      MEGAHD: {
        name: "4K",
        styles: { height: "2160px", width: "3840px" },
        type: "desktop",
      },
    },
  },
}

export const globalTypes = {
  theme: {
    name: "Theme",
    description: "Change the global theme",
    defaultValue: "Light",
    toolbar: {
      icon: "paintbrush",
      items: ["Light", "Dark"],
    },
  },
  drawerOpen: {
    name: "Drawer",
    description: "Open or close the side navigation drawer",
    defaultValue: "Open",
    toolbar: {
      icon: "menu",
      items: ["Close", "Open"],
    },
  },
}

// NOTE: [Inner Most Decorator, ..., Outer Most Decorator]
export const decorators = [
  decorator(CssBaselined),
  decorator(ThemeProvider),
  ThemeSelectionDecorator,
  DrawerDecorator,
  NextRouterDecorator,
]
