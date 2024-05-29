import styled from 'styled-components'
import { SearchOutlined } from '@ant-design/icons'

const Outer = styled.div`
  background: #ffffff;
  padding-bottom: 44px;
`

const Menu = styled.div`
  display: flex;
  justify-content: end;
  margin-right: 20px;
`

const MenuItem = styled.p`
  color: #000;
  font-family: 'Noto Sans JP';
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
  margin-left: 35px;
`

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
const TSearch = styled.div`
  display: flex;
  padding-bottom: 30px;
  cursor: pointer;
`
const Search = styled.input`
  width: 520px;
  height: 42px;
  flex-shrink: 0;
  border-radius: 5px;
  border: 1px solid var(--C1-D, #d1d1d1);
  background: var(--C1-H, #f9f9f9);
  margin-left: 20px;
`

const CustomSearchIcon = styled(SearchOutlined)`
  font-size: 24px;
  margin-left: 20px;
  color: #ffffff;
  border: 1px;
  border-radius: 4px;
  background-color: #6a983c;
  padding: 4px 8px;
  &:hover {
    color: #333;
    background-color: #0056b3;
  }
`
const MenuContent = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background: var(--C1-H, #f9f9f9);
`

const P = styled.p`
  color: #000;
  font-family: 'Noto Sans JP';
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  cursor: pointer;
`

const Feature = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  margin: 10px;
`
const ContentFeature = styled.p`
  color: #000;
  font-family: 'Noto Sans';
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`

const Button = styled.div`
  margin-top: 10px;
  width: 193px;
  height: 50px;
  flex-shrink: 0;
  border-radius: 5px;
  border: 1px solid #6a983c;
  cursor: pointer;
`
const ButtonContent = styled.p`
  color: #6a983c;
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-align: center;
`

const Images = styled.img`
  width: 1140px;
  height: 130px;
  flex-shrink: 0;
  padding: 10px;
`

export {
  Menu,
  MenuItem,
  Content,
  TSearch,
  Search,
  CustomSearchIcon,
  MenuContent,
  P,
  Outer,
  Feature,
  ContentFeature,
  Button,
  ButtonContent,
  Images,
}
