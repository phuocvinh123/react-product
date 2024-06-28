import styled from 'styled-components'

const OuterStyles = styled.div`
  background: #fff;
`

const DivTotal = styled.div`
  background: #fff;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #d1d1d1;
  margin-left: 37px;
  margin-right: 37px;
  padding-top: 30px;
  gap: 80px;
`
const Div = styled.div`
  display: flex;
  flex-direction: column;
  width: 367px;
`

const DivEnd = styled.div`
  display: flex;
  gap: 10px;
`

const Image = styled.img`
  width: 52px;
  height: 36px;
  flex-shrink: 0;
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

const P = styled.p`
  color: #575757;
  font-family: 'Noto Sans';
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
`

export { DivTotal, Div, H1, P, DivEnd, Image, OuterStyles }
