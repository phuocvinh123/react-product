import {
  Menu,
  MenuItem,
  Content,
  TSearch,
  Search,
  CustomSearchIcon,
  MenuContent,
  MenuButton,
  Outer,
  Feature,
  ContentFeature,
  Button,
  ButtonContent,
  Images,
} from './styled'

import { Body } from './body'

export const Banner = () => {
  return (
    <>
      <Outer>
        <Menu>
          <MenuItem>ログイン</MenuItem>
          <MenuItem>新規登録</MenuItem>
          <MenuItem>ご利用の流れ</MenuItem>
          <MenuItem>マイページ</MenuItem>
        </Menu>
        <Content>LOGO</Content>
        <TSearch>
          <Search placeholder='キーワード'></Search>
          <Search></Search>
          <CustomSearchIcon />
        </TSearch>
        <MenuContent>
          <MenuButton>みんなのサービス</MenuButton>
          <MenuButton>おすすめ</MenuButton>
          <MenuButton>みんなのストア</MenuButton>
          <MenuButton>近くのスポット</MenuButton>
        </MenuContent>
        <Feature>
          <ContentFeature>
            近所の人のユニークなサービスを体験できるみんなのサービス <br />
            近所の人のサービスを購入して体験してみましょう。プライベートレッスンから家事代行までジャンルは様々。
          </ContentFeature>
          <Button>
            <ButtonContent>サービスを出品する</ButtonContent>
          </Button>
        </Feature>
        <Images
          src='https://s3-alpha-sig.figma.com/img/bd32/38a7/89d2ef7eb72b18b5c1b7849407612293?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Lo3E83Izf5Tj49WywdpIFQhlNfm3WEsIySHQHUEt~1Jf2SXK6l8EmziIKkwStcCV1LYFLs01uIVertlfb~hSmyD6F0ZNh-DmN20N7p1WnhpoQbNgg5umzlmIh2GXAX4W6iCuqBXUnJEUJoQoJzxnJVmOW0lorgM~3P87oovHfxnIwW-Mv93Uh-MyQ9xI-VcXxOHXY0CidmtQE2Zh~E-pv4vXffOS08GtYJwXKx-OOANS2Onr2VSTqfuKDBDcLrMbbPHWVKzKOdo-5vKSffhg1chHTykJOn4O0cjud3GhLuJ2Q3PLc9B7k439zh4GAo88d~ao7phU2a~bhK7UkH1zmw__'
          alt='Banner'
        ></Images>
        <Body></Body>
      </Outer>
    </>
  )
}
