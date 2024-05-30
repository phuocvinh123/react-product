import { MenuOutlined } from '@ant-design/icons'
import styled from 'styled-components'
import { Pagination } from 'antd'
import React, { useState } from 'react'

const Bodys = styled.div`
  display: flex;
  margin-top: 31px;
`
const BodyContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 30px;
  margin-right: 80px;
  width: 350px;
`

const Content = styled.div`
  width: 155px;
  height: 28px;
  flex-shrink: 0;
  border-radius: 5px 5px 5px 0px;
  background: #6a983c;
  position: absolute;
  top: 0;
  left: -6px;
  font-family: 'Noto Sans';
  font-size: 10px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  display: none;
`
const Icon = styled.span`
  width: 28px;
  height: 28px;
  flex-shrink: 0;
  position: absolute;
  right: 20px;
  top: 0;
  display: none;
`

const Svg = styled.span`
  width: 5px;
  height: 7.5px;
  flex-shrink: 0;
  fill: #46760a;
  position: absolute;
  top: 48px;
  left: -6px;
  display: none;
`

const BodyList = styled.div`
  display: flex;
  flex-direction: column;
  width: 270px;
  height: 395px;
  flex-shrink: 0;
  border-radius: 12px;
  border: 1px solid #ddd;
  cursor: pointer;
  position: relative;

  &:hover ${Content} {
    transform: translateY(100%);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
  }

  &:hover ${Icon} {
    transform: translateY(100%);
    display: flex;
  }

  &:hover ${Svg} {
    transform: translateY(100%);
    display: flex;
  }
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
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 6

  const handlePageChange = (page: React.SetStateAction<number>) => {
    console.log('page :' + page)
    setCurrentPage(page)
  }

  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage

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
          {Array.from({ length: 15 }, (_, index) => {
            if (index >= startIndex && index < endIndex) {
              return (
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
                    <P>
                      IKEA家具の組立します　組立途中、再組立/調整も対応します
                    </P>
                  </Div>
                  <DivEnd>
                    <Div>
                      <ImgRound
                        style={{ marginLeft: '14px' }}
                        src='https://i.pinimg.com/736x/e3/a4/54/e3a45433562a80e6355f12effff6a3d3.jpg'
                      ></ImgRound>
                      <P>10</P>
                    </Div>
                    <H2 style={{ marginRight: '14px' }}>¥ 12,000</H2>
                  </DivEnd>
                  <Content>イケア家具組立認定サポーター</Content>
                  <Icon>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='28'
                      height='28'
                      viewBox='0 0 28 28'
                      fill='none'
                    >
                      <rect width='28' height='28' rx='14' fill='#F4F8EC' />
                      <path
                        d='M9 19.5341V8.5C9 8.22386 9.22386 8 9.5 8H17.9872C18.2634 8 18.4872 8.22386 18.4872 8.5V19.6206C18.4872 20.0175 18.047 20.2562 17.7144 20.0396L13.7436 17.4541L9.76633 19.9572C9.43336 20.1668 9 19.9275 9 19.5341Z'
                        stroke='#6A983C'
                      />
                      <path d='M9 10.5874H18.4872' stroke='#6A983C' />
                    </svg>
                  </Icon>
                  <Svg>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='5'
                      height='8'
                      viewBox='0 0 5 8'
                      fill='none'
                    >
                      <path d='M5 7.5L0 0H5V7.5Z' fill='#46760A' />
                    </svg>
                  </Svg>
                </BodyList>
              )
            }
            return null
          })}
        </DivTotal>
      </Bodys>
      <Pagination
        current={currentPage}
        pageSize={itemsPerPage}
        total={15}
        onChange={(page) => handlePageChange(page)}
        style={{
          display: 'flex',
          justifyContent: 'end',
          marginTop: '20px',
          marginRight: '25px',
        }}
      />
    </>
  )
}
