import styled from 'styled-components'

const SplitContainer = styled('div')`
  width: 100%;
  display: flex;
  flex-direction: row;
`

const Left = styled('div')`
  width: 30%;
  color: #673ab7;
`

const Right = styled('div')`
  width: 70%;
  color: white;
`

const CenterVertical = styled('div')`
  display: flex;
  align-items: center;
`

export { SplitContainer, Left, Right, CenterVertical }
