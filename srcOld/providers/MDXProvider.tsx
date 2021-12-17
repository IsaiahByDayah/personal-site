import { FC } from "react"
import { MDXProvider as MDXP } from "@mdx-js/react"
import { Typography } from "@material-ui/core"

const Paragraph: FC<unknown> = (props) => (
  <Typography variant="body1" gutterBottom {...props} />
)
const Heading1: FC<unknown> = (props) => (
  <Typography variant="h1" gutterBottom {...props} />
)
const Heading2: FC<unknown> = (props) => (
  <Typography variant="h2" gutterBottom {...props} />
)
const Heading3: FC<unknown> = (props) => (
  <Typography variant="h3" gutterBottom {...props} />
)
const Heading4: FC<unknown> = (props) => (
  <Typography variant="h4" gutterBottom {...props} />
)
const Heading5: FC<unknown> = (props) => (
  <Typography variant="h5" gutterBottom {...props} />
)
const Heading6: FC<unknown> = (props) => (
  <Typography variant="h6" gutterBottom {...props} />
)
const BlockQuote: FC<unknown> = (props) => (
  <Typography
    style={{ marginLeft: 40, fontStyle: "italic" }}
    component="blockquote"
    gutterBottom
    {...props}
  />
)

const components = {
  // p: Paragraph,
  // h1: Heading1,
  // h2: Heading2,
  // h3: Heading3,
  // h4: Heading4,
  // h5: Heading5,
  // h6: Heading6,
  // blockquote: BlockQuote,
}

const MDXProvider: FC = ({ children }) => (
  <MDXP components={components}>{children}</MDXP>
)

export default MDXProvider
