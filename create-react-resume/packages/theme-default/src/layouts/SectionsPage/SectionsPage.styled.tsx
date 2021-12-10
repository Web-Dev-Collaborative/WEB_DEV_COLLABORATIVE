import styled from 'styled-components'
import { Right, Left } from '../SplitContainer'

const SectionsContainer = styled('div')`
  display: flex;
  direction: row;
  height: 100%;
`

const SectionLeft = styled(Left)``

const SectionRight = styled(Right)`
  section {
    padding: 64px 0 0 16px;
    width: 80%;
    @media (max-width: 768px) {
      padding: 64px 16px 0 16px;
      width: auto;
    }
  }
`

export { SectionsContainer, SectionRight as Right, SectionLeft as Left }
