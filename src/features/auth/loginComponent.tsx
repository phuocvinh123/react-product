import { Login } from './login'
import { Header } from '../home/header'
import { FooterComponent } from '../home/footer'
import styled from 'styled-components'

const Container = styled.div`
  @media (min-width: 1240px) {
    margin-left: 328px;
    margin-right: 329px;
  }
`

export const LoginComponent = () => {
  return (
    <>
      <Header />
      <Login />
      <Container>
        <FooterComponent />
      </Container>
    </>
  )
}
