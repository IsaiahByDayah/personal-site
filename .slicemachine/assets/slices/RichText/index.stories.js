import MyComponent from "../../../../slices/RichText"

export default {
  title: "slices/RichText",
}

export const _DefaultSlice = () => (
  <MyComponent
    slice={{
      variation: "default-slice",
      name: "Default slice",
      slice_type: "rich_text",
      items: [],
      primary: {
        content: [
          {
            type: "paragraph",
            text: "Consequat ex ullamco ea non sunt incididunt quis. Anim elit cupidatat labore ut nostrud ea laboris. Lorem mollit fugiat voluptate do ipsum laboris ut dolor deserunt velit.",
            spans: [],
          },
        ],
      },
      id: "_DefaultSlice",
    }}
  />
)
_DefaultSlice.storyName = "Default slice"
