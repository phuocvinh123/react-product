import styled from 'styled-components'
import { Title, P } from './styled'

const Content = styled.p`
  color: #000;
  font-family: 'Open Sans';
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  padding-left: 10px;
  text-align: center;
`
const MenuItem = styled.button`
  color: #000;
  font-family: 'Noto Sans JP';
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
  margin-left: 35px;
  border: none;
  background: #ffffff;
  margin-top: 10px;

  &:hover {
    color: #e67e22;
  }
`
const Menu = styled.div`
  display: flex;
  justify-content: end;
  margin-right: 20px;
`

const Div = styled.div`
  @media (min-width: 1240px) {
    margin-left: 328px;
    margin-right: 329px;
  }
`

export const Header = () => {
  return (
    <>
      <Title>
        <P>エニタイムズ安全・安心ガイド</P>
      </Title>
      <Div>
        <Menu>
          <MenuItem>ログイン</MenuItem>
          <MenuItem>新規登録</MenuItem>
          <MenuItem>ご利用の流れ</MenuItem>
          <MenuItem>マイページ</MenuItem>
        </Menu>
        <Content>LOGO</Content>
      </Div>
    </>
  )
}
