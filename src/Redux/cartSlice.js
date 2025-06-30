import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    AddItem: (state, action) => {
      const existingItem = state.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.qnty += 1;
      } else {
        state.push({ ...action.payload, qnty: 1 });
      }
    },
    RemoveItem: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    IncreaseQnty: (state, action) => {
      const item = state.find(item => item.id === action.payload);
      if (item) {
        item.qnty += 1;
      }
    },
    DecreaseQnty: (state, action) => {
      const item = state.find(item => item.id === action.payload);
      if (item && item.qnty > 1) {
        item.qnty -= 1;
      } else {
        // If quantity is 1, remove the item
        return state.filter(item => item.id !== action.payload);
      }
    }
  },
});

export const { AddItem, RemoveItem, IncreaseQnty, DecreaseQnty } = cartSlice.actions;
export default cartSlice.reducer;
