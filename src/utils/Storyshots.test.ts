import initStoryshots, { multiSnapshotWithOptions } from "@storybook/addon-storyshots"

// jest.mock("typeface-nunito", () => () => "mock result")

initStoryshots({
  /* configuration options */
  test: multiSnapshotWithOptions({}),
})
