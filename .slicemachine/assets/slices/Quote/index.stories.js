import MyComponent from "../../../../slices/Quote"

export default {
  title: "slices/Quote",
}

export const _DefaultSlice = () => (
  <MyComponent
    slice={{
      variation: "default-slice",
      name: "Default slice",
      slice_type: "quote",
      items: [],
      primary: { content: "morph B2C experiences" },
      id: "_DefaultSlice",
    }}
  />
)
_DefaultSlice.storyName = "Default slice"
