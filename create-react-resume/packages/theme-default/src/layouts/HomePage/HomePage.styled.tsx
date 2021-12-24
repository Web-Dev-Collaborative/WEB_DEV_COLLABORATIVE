import styled from 'styled-components'

const HomeContainer = styled('div')`
  display: flex;
  align-items: center;
  height: 100%;

  h1 {
    margin: 0 16px;
    font-size: 100px;
    @media screen and (max-width: 600px) {
      font-size: 36px;
      margin: 0 20px;
    }
    font-weight: 800;
  }

  h3 {
    margin: 16px 22px;
    font-size: 32px;
    @media screen and (max-width: 600px) {
      font-size: 24px;
    }
    font-weight: 700;
  }
  p {
    margin: 16px 22px;
    font-size: 18px;
    @media screen and (max-width: 600px) {
      font-size: 14px;
    }
    max-width: 80%;
    color: #f5f5f5;
  }
  img {
    margin: 0 15%;
    width: 70%;
    border-radius: 50%;
  }
`

export { HomeContainer }
