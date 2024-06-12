import { configureStore } from '@reduxjs/toolkit'
import productReducer from '../slice/productSlice'

export type RootState = ReturnType<typeof store.getState>
export const store = configureStore({
  reducer: {
    product: productReducer,
  },
})
