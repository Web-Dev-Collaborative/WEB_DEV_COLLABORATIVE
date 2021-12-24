import styled from 'styled-components'

export default styled.ul`
  list-style: none;
  margin: 1rem;
  padding: 0;
  & li {
    margin: 0.25rem 0;
  }
  & li::before {
    content: '- ';
    font-size: 1em;
    margin-right: 5px;
  }
  @media (max-width: 768px) {
    font-size: 0.75rem;
  }
`
