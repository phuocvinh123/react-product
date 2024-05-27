import styled from 'styled-components'
import { Banner } from '../body/banner'

const OuterContainer = styled.div`
  background: var(--C1-H, #f9f9f9);
`

const Container = styled.div`
  padding: 16px;

  @media (min-width: 1240px) {
    margin-left: 328px;
    margin-right: 329px;
  }
`

export const MyComponent = () => {
  return (
    <OuterContainer>
      <Container>
        <Banner />
      </Container>
    </OuterContainer>
  )
}
