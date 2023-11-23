import { createSlice } from '@reduxjs/toolkit'

const initialState: any = {
  value: [],
};

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addNewItem: (state, action) => {
      state.value = [...state.value, action.payload]
    },
    increment: (state, action) => {
      
    },
    decrement: state => {
      
    }
  }
})

export const { increment, decrement, addNewItem } = basketSlice.actions

export default basketSlice.reducer