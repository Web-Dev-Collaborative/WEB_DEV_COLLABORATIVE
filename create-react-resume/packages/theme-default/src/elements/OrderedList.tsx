import styled from 'styled-components'

export default styled.ol`
  list-style: none;
  margin: 1rem;
  padding: 0;
  counter-reset: my-awesome-counter;
  & li {
    counter-increment: my-awesome-counter;
  }
  & li::before {
    content: counter(my-awesome-counter) '. ';
    color: #fafafa;
    margin-right: 5px;
  }
`
