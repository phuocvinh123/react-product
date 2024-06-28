import {
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
import { useDispatch } from 'react-redux'
import { setSearchText, setCategory } from '../../slice/productSlice'

import { Body } from './body'

export const Banner = () => {
  const dispatch = useDispatch()
  const handleSearch = () => {
    const searchInput = document.querySelector(
      '.search-input'
    ) as HTMLInputElement
    const searchValue = searchInput.value
    dispatch(setSearchText(searchValue))
    searchInput.value = ''
  }

  const handleFillters = (event: React.MouseEvent<HTMLButtonElement>) => {
    const value = event.currentTarget.value
    dispatch(setCategory(value))
  }

  return (
    <>
      <Outer>
        <TSearch>
          <Search placeholder='キーワード'></Search>
          <Search className='search-input'></Search>
          <CustomSearchIcon onClick={handleSearch} />
        </TSearch>
        <MenuContent>
          <MenuButton onClick={handleFillters} value=''>
            みんなのサービス
          </MenuButton>
          <MenuButton onClick={handleFillters} value='HP'>
            おすすめ
          </MenuButton>
          <MenuButton onClick={handleFillters} value='Dell'>
            みんなのストア
          </MenuButton>
          <MenuButton onClick={handleFillters} value='Lenovo'>
            近くのスポット
          </MenuButton>
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
          src='https://s3-alpha-sig.figma.com/img/bd32/38a7/89d2ef7eb72b18b5c1b7849407612293?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aSA1BC8sn6Mf17Y016b6yFbEhQHnxKBBnZOQzJhVNkADKQRa8HUtl-oITA-5dfC3Xus7R1dzVNA-isauIG13yRaq3XdKLvfji94F1cV4LBLwX8N0S3X6tKJPQpVGBfx91ggB1wSb~xpHSLGWKJghtPOKw~K6gQuO4bCa8tbh~7XBlVzciq4OYxTAE5CpsKLKhRx2~oi2HjpTHI-518ozwnUcHxNrMIfdimzuchhXr5dXGF4S-I4XMwEFcgpPKoAhYELjuZMkJ-C8Zn3LLMZj31T9JC3gpP89FBHQYROqhv6RhtLc~fhH35IMM0hoZcucNRzwsFlthWy1LHIhHQaGCQ__'
          alt='Banner'
        ></Images>
        <Body></Body>
      </Outer>
    </>
  )
}
