import initStoryshots, { multiSnapshotWithOptions } from "@storybook/addon-storyshots"

initStoryshots({
  /* configuration options */
  test: multiSnapshotWithOptions({}),
})
