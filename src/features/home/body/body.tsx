import { MenuOutlined } from '@ant-design/icons'
import styled from 'styled-components'
import { Pagination } from 'antd'
import React, { useEffect } from 'react'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../store/store'
import { setProducts, setPagination } from '../../slice/productSlice'
import { ProductList } from './productCart'

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

export const Body = () => {
  const dispatch = useDispatch()
  const { products, pagination, searchText, category } = useSelector(
    (state: RootState) => state.product
  )

  const API = 'https://api-product-tfw8.onrender.com'

  useEffect(() => {
    fetchProducts(
      pagination.currentPage,
      pagination.limit,
      searchText,
      category
    )
  }, [pagination.currentPage, searchText, category])

  const fetchProducts = async (
    page: number,
    limit: number,
    search: string,
    category: string
  ) => {
    try {
      const response = await axios.get(`${API}/api/product/get-all`, {
        params: {
          page: page,
          limit: limit,
          search: search,
          category: category,
        },
      })
      const { data, pagination } = response.data
      dispatch(setProducts(data))
      dispatch(setPagination(pagination))
    } catch (error) {
      console.error('Lỗi khi gọi API:', error)
      dispatch(setProducts([]))
      dispatch(
        setPagination({
          currentPage: 1,
          limit: 6,
          totalPage: 1,
          totalProducts: 0,
        })
      )
    }
  }

  const handlePageChange = (pageNumber: any) => {
    fetchProducts(pageNumber, pagination.limit, searchText, category)
  }

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
        <ProductList products={products} />
      </Bodys>
      <Pagination
        current={pagination?.currentPage || 1}
        pageSize={pagination?.limit || 10}
        total={pagination?.totalProducts || 0}
        onChange={handlePageChange}
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
