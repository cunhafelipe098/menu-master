import { configureStore } from '@reduxjs/toolkit'
import basketReducer from './Slices/basket'

export default configureStore({
  reducer: {
    basket: basketReducer
  }
})