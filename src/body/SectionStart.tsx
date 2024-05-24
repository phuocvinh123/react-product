// import { Row } from 'antd'
import styled from 'styled-components'
import Banner1 from './images/banner1.png'

const Banner = styled.div`
  display: flex;
  justify-content: space-between;
  background: #fff;
  margin-top: 10px;
  margin-right: 370px;
  margin-left: 310px;
`

const Itemtext = styled.p`
  color: #575757;
  font-family: 'Noto Sans';
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`

const ButtonBorder = styled.div`
  margin-top: 10px;
  text-align: center;
  width: 193px;
  height: 50px;
  flex-shrink: 0;
  border-radius: 5px;
  border: 1px solid #3770e1;
`

const Button = styled.div`
  color: #3474f4;
  font-family: 'Noto Sans';
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-top: 12px;
`
const Image = styled.img`
  width: 2883px;
  height: 297px;
  flex-shrink: 0;
`

export const SectionStart = () => {
  return (
    <>
      <Banner>
        <Itemtext>
          Everyone's service that allows you to experience the unique services
          of your neighbors
          <br />
          Buy and experience the services of your neighbors. There are various
          genres from private lessons to housekeeping.
        </Itemtext>
        <ButtonBorder>
          <Button>Selling services</Button>
        </ButtonBorder>
      </Banner>
      <Image src={Banner1} />
    </>
  )
}
