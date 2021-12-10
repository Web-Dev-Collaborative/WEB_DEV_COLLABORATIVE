import * as React from 'react'
import {
  Navbar,
  HomePage,
  SectionsPage,
  Paragraph,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  Link,
  Blockquote,
  Hr,
  InlineCode,
  OrderedList,
  UnorderedList,
} from '@create-react-resume/theme-default'

export default {
  layouts: {
    Navigation: Navbar,
    HomePage: HomePage,
    SkillsPage: SectionsPage,
    RolesPage: SectionsPage,
    Education: SectionsPage,
  },
  elements: {
    p: props => <Paragraph {...props} />,
    h1: props => <H1 {...props} />,
    h2: props => <H2 {...props} />,
    h3: props => <H3 {...props} />,
    h4: props => <H4 {...props} />,
    h5: props => <H5 {...props} />,
    h6: props => <H6 {...props} />,
    a: props => <Link {...props} />,
    blockquote: props => <Blockquote {...props} />,
    hr: props => <Hr {...props} />,
    inlineCode: props => <InlineCode {...props} />,
    ol: props => <OrderedList {...props} />,
    ul: props => <UnorderedList {...props} />,
  },
}
