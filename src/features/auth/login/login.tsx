import styled from 'styled-components'
import { LoginWith } from './loginWith'

const Div = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 100px;
`

const P = styled.p`
  color: #000;
  font-family: 'Noto Sans';
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
`
const Container = styled.div`
  position: relative;
  width: 400px;
  height: 50px;
  display: flex;
  align-items: center;
`

const Input = styled.input`
  width: 100%;
  height: 100%;
  padding-left: 50px;
  box-sizing: border-box;
  border: 1px solid #858585;
  border-radius: 4px;
`

const Icon = styled.svg`
  position: absolute;
  left: 10px;
  width: 20px;
  height: 17px;
`

const BorderRight = styled.div`
  position: absolute;
  border: 1px solid #ccc8c8;
  height: 48px;
  left: 40px;
`

const Button = styled.button`
  width: 400px;
  height: 55px;
  background: #6a983c;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin-top: 40px;
  cursor: pointer;
  border: none;

  &:hover {
    color: #5ae622;
  }
`

const LinkContent = styled.p`
  width: 354px;
  height: 34px;
  flex-shrink: 0;
  color: #6a983c;
  font-family: 'Noto Sans';
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`

export const Login = () => {
  return (
    <Div>
      <div style={{ marginRight: '175px' }}>
        <P>メールアドレス</P>
        <Container>
          <Icon
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 20 17'
            fill='none'
          >
            <path
              d='M1.75781 0.29541H18.2422C19.2102 0.29541 20 1.15891 20 2.21943V15.0463C20 16.1032 19.2138 16.9703 18.2422 16.9703H1.75781C0.792187 16.9703 0 16.1097 0 15.0463V2.21943C0 1.1625 0.786249 0.29541 1.75781 0.29541ZM2.00055 1.57809L9.96273 10.2932L17.9938 1.57809H2.00055ZM18.8281 14.7807V2.47892L13.1844 8.6033L18.8281 14.7807ZM17.9995 15.6876L12.3522 9.50635L10.3734 11.6537C10.1444 11.9022 9.77473 11.9014 9.5466 11.6517L7.61719 9.53983L2.00051 15.6876H17.9995ZM1.17188 14.7806L6.78855 8.63285L1.17188 2.48503V14.7806Z'
              fill='black'
            />
          </Icon>
          <Input type='text' />
          <BorderRight></BorderRight>
        </Container>
        <P>パスワード</P>
        <Container>
          <Icon
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 18 27'
            fill='none'
          >
            <path
              d='M16.4394 10.2137H15.567V7.53839C15.567 3.58363 12.6204 0.36377 8.99515 0.36377C5.36995 0.36377 2.42326 3.58363 2.42326 7.5331V10.2084H1.55573C0.6979 10.2084 0 10.9697 0 11.9056V24.5735C0 25.5093 0.6979 26.2707 1.55573 26.2707H16.4443C17.3021 26.2707 18 25.5093 18 24.5735V11.9056C17.9952 10.975 17.2973 10.2137 16.4394 10.2137ZM4.40065 7.5331C4.40065 4.76794 6.46042 2.52091 8.99515 2.52091C11.5299 2.52091 13.5897 4.76794 13.5897 7.5331V10.2031H4.40065V7.5331ZM16.0129 24.1135H1.97738V12.3708H16.0178V24.1135H16.0129Z'
              fill='black'
            />
            <path
              d='M8.99455 22.5007C9.54221 22.5007 9.98324 22.0195 9.98324 21.4221V18.6411C9.98324 18.0436 9.54221 17.5625 8.99455 17.5625C8.44689 17.5625 8.00586 18.0436 8.00586 18.6411V21.4221C8.00586 22.0143 8.44689 22.5007 8.99455 22.5007Z'
              fill='black'
            />
          </Icon>
          <Input type='password' />
          <BorderRight></BorderRight>
        </Container>
        <Button>ログイン</Button>
        <LinkContent style={{ color: '#6A983C' }}>
          ユーザID・パスワードを忘れた場合
        </LinkContent>
      </div>
      <LoginWith></LoginWith>
    </Div>
  )
}
