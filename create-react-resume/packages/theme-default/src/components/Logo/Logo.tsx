import styled from 'styled-components'

const Logo = styled.div`
  width: 30%;
  left: 0;
  position: absolute;
  text-align: right;

  > * {
    max-width: 40%;
    margin: 1.5rem 10%;
    @media (max-width: 768px) {
      max-width: 80%;
      margin: 1rem 10%;
    }
  }
`
export default Logo
