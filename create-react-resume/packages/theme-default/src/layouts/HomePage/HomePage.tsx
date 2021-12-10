import * as React from 'react'
import { HomeContainer } from './HomePage.styled'
import { Left, Right, SplitContainer } from '../SplitContainer'

interface Props {
  profilePicUrl: string
  title: string
  subTitle: string
  descriptions: string[]
}

const HomePage: React.FC<Props> = props => {
  const { profilePicUrl, title, subTitle, descriptions } = props
  return (
    <HomeContainer>
      <SplitContainer>
        <Left>
          <div>
            <img src={profilePicUrl} />
          </div>
        </Left>
        <Right>
          <div>
            <h1>{title}</h1>
            <h3>{subTitle}</h3>
            {descriptions.map((d, i) => (
              <p key={i}>{d}</p>
            ))}
          </div>
        </Right>
      </SplitContainer>
    </HomeContainer>
  )
}

export default HomePage
