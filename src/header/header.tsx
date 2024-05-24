import styled from 'styled-components'
import { Row, Col } from 'antd'
import { SearchOutlined } from '@ant-design/icons'

const Container = styled.div`
  background-color: #3175fc;
  padding: 10px;
`

const HContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 300px;
`

const HeaderText = styled.p`
  color: #f0f0f0;
  font-family: 'Noto Sans';
  font-size: 16px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  margin-right: 20px;
  width: 300px;
`

const MenuContainer = styled(Row)`
  width: 100%;
  justify-content: center;
`

const MenuItem = styled(Col)`
  text-align: center;
  cursor: pointer;
  padding: 10px 20px;
  color: #f0f0f0;

  &:hover {
    background-color: #f0f0f0;
    color: #3175fc;
    border-radius: 6px;
  }
`

const HeaderBetween = styled.div`
  background: #fff;
  box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.1);
`

const MHeader = styled.div`
  display: flex;
  align-items: center;
  margin-left: 310px;
  margin-right: 370px;
  height: 80px;
  flex-shrink: 0;
  background: #fff;
  box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.1);
`
const LogoText = styled.div`
  color: #000;
  font-family: 'Open Sans';
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`

const ItemText = styled(Col)`
  color: #000;
  font-family: 'Noto Sans';
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`

export const Header = () => {
  return (
    <>
      <Container>
        <HContainer>
          <HeaderText>エニタイムズ安全・安心ガイド</HeaderText>
          <MenuContainer>
            <MenuItem span={3}>Login</MenuItem>
            <MenuItem span={3}>Register</MenuItem>
            <MenuItem span={3}>Flow of use</MenuItem>
            <MenuItem span={3}>My page</MenuItem>
          </MenuContainer>
        </HContainer>
      </Container>
      <HeaderBetween>
        <MHeader>
          <LogoText>LOGO</LogoText>
          <MenuContainer>
            <ItemText span={4}>Everyone's service</ItemText>
            <ItemText span={4}>Introduce</ItemText>
            <ItemText span={4}>Everyone's store</ItemText>
            <ItemText span={4}>Recent spot</ItemText>
          </MenuContainer>
          <SearchOutlined />
        </MHeader>
      </HeaderBetween>
    </>
  )
}
