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
            text: "Ipsum non adipisicing eu pariatur ea voluptate ullamco adipisicing elit eiusmod ea. Est voluptate sunt culpa laborum. Anim mollit sit deserunt ea velit pariatur Lorem aute eu culpa et deserunt culpa enim.",
            spans: [],
          },
        ],
      },
      id: "_DefaultSlice",
    }}
  />
)
_DefaultSlice.storyName = "Default slice"
