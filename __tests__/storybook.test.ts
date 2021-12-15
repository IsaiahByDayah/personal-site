import initStoryshots, { multiSnapshotWithOptions } from "@storybook/addon-storyshots"

// HTMLCanvasElement.prototype.getContext = jest.fn()

// REF: https://github.com/vercel/next.js/issues/5416#issuecomment-441589662
// Manually mock next/dynamic as the next.js (7.0.2) babel plugin will compile to Webpack
// lazy imports (require.resolveWeak) who're conflicting with the Node module system.
jest.mock("next/dynamic", () => () => {
  const DynamicComponent = () => null
  DynamicComponent.displayName = "LoadableComponent"
  DynamicComponent.preload = jest.fn()
  return DynamicComponent
})

initStoryshots({
  test: multiSnapshotWithOptions({}),
})
