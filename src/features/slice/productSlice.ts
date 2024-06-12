import { createSlice } from '@reduxjs/toolkit'

const productSlice = createSlice({
  name: 'product',
  initialState: {
    products: [],
    pagination: {
      currentPage: 1,
      limit: 6,
      totalPage: 1,
      totalProducts: 0,
    },
    searchText: '',
    category: '',
  },
  reducers: {
    setProducts: (state, action) => {
      return {
        ...state,
        products: action.payload,
      }
    },
    setPagination: (state, action) => {
      return {
        ...state,
        pagination: action.payload,
      }
    },
    setSearchText: (state, action) => {
      state.searchText = action.payload
    },

    setCategory: (state, action) => {
      state.category = action.payload
    },
  },
})

export const {
  setProducts,
  setSearchText,
  // setFilters,
  setPagination,
  setCategory,
} = productSlice.actions
export default productSlice.reducer
