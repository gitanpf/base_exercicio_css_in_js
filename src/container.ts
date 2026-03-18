import styled from 'styled-components'

const Container = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 16px;

  @media (max-width: 1024px) {
    max-width: 80%;
  }
`

export default Container
