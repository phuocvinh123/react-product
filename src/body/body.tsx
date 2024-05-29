import { MenuOutlined } from '@ant-design/icons'
import styled from 'styled-components'

const Bodys = styled.div`
  display: flex;
  margin-top: 31px;
`
const BodyContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 30px;
  margin-right: 140px;
  width: 350px;
`
const BodyList = styled.div`
  display: flex;
  flex-direction: column;
  width: 270px;
  height: 395px;
  flex-shrink: 0;
  border-radius: 12px;
  border: 1px solid #ddd;
`
const P = styled.p`
  color: #575757;
  font-family: 'Noto Sans';
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
`
const H1 = styled.h1`
  color: var(--C1-A, #151515);
  font-family: 'Noto Sans';
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  cursor: pointer;
`

const H2 = styled.h2`
  color: #000;
  font-family: 'Noto Sans';
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  cursor: pointer;
`

const Image = styled.img`
  margin: 14px;
  width: 240px;
  height: 160px;
  flex-shrink: 0;
  border: 1px;
  border-radius: 12px;
  object-fit: cover;
`

const Div = styled.div`
  display: flex;
  align-items: center;
  margin-left: 14px;
`
const ImgRound = styled.img`
  width: 38.867px;
  height: 25.911px;
  flex-shrink: 0;
  border: 1px;
  border-radius: 100%;
  object-fit: cover;
  margin-right: 14px;
`

const DivEnd = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 268px;
  height: 39px;
  flex-shrink: 0;
  border-radius: 0px 0px 11px 11px;
  background: #f9f9f9;
`

const DivTotal = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`

export const Body = () => {
  return (
    <>
      <Bodys>
        <BodyContent>
          <H1>
            <MenuOutlined /> カテゴリー
          </H1>
          <H2>すべて</H2>
          <P>家事</P>
          <P>修理・組立</P>
          <P>ペット</P>
          <P>高齢者</P>
          <P>趣味・習い事</P>
          <H2>並べ替え</H2>
          <P>デフォルト順</P>
          <P>新着順</P>
          <P>金額低い順</P>
          <P>人気順</P>
          <P>販売実績順</P>
          <H2>販売金額</H2>
          <P>0円から</P>
          <P>100円から</P>
          <P>1000円から</P>
          <P>5000円から</P>
          <P>10000円から</P>
        </BodyContent>
        <DivTotal>
          {Array.from({ length: 12 }, (_, index) => (
            <BodyList key={index}>
              <Image src='https://i.pinimg.com/originals/39/8b/ad/398badb6f818e82f40302a161717983c.jpg'></Image>
              <Div>
                <ImgRound src='https://i.pinimg.com/originals/39/8b/ad/398badb6f818e82f40302a161717983c.jpg'></ImgRound>
                <P>むくりこ</P>
              </Div>
              <Div>
                <H2>イケア家具組み立て代行</H2>
              </Div>
              <Div>
                <P>IKEA家具の組立します　組立途中、再組立/調整も対応します</P>
              </Div>
              <DivEnd>
                <ImgRound
                  style={{ marginLeft: '14px' }}
                  src='https://i.pinimg.com/736x/e3/a4/54/e3a45433562a80e6355f12effff6a3d3.jpg'
                ></ImgRound>
                <H2 style={{ marginRight: '14px' }}>¥ 12,000</H2>
              </DivEnd>
            </BodyList>
          ))}
        </DivTotal>
      </Bodys>
    </>
  )
}
