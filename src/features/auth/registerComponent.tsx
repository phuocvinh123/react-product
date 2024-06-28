import { Header } from '../home/header'
import { FooterComponent } from '../home/footer'
import { Register } from './register'
import styled from 'styled-components'

const Container = styled.div`
  @media (min-width: 1240px) {
    margin-left: 328px;
    margin-right: 329px;
  }
`

export const RegisterComponent = () => {
  return (
    <>
      <Header />
      <Register />
      <Container>
        <FooterComponent />
      </Container>
    </>
  )
}
