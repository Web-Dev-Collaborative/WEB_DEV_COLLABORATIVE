import * as React from 'react'

import { SectionsContainer, Left, Right } from './SectionsPage.styled'

const SectionsPage: React.FC = props => {
  const { children } = props
  return (
    <SectionsContainer>
      <Left />
      <Right>
        {React.Children.map(children, child => (
          <section>{child}</section>
        ))}
      </Right>
    </SectionsContainer>
  )
}

SectionsPage.displayName = 'SectionsPage'

export default SectionsPage
