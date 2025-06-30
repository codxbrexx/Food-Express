import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: [],
  reducers: {
    ToggleFavorite: (state, action) => {
      const itemIndex = state.findIndex(item => item.id === action.payload.id);
      if (itemIndex >= 0) {
        // Item is already in favorites, remove it
        state.splice(itemIndex, 1);
      } else {
        // Item not in favorites, add it
        state.push(action.payload);
      }
    },
    RemoveFavorite: (state, action) => {
      return state.filter(item => item.id !== action.payload);
    }
  },
});

export const { ToggleFavorite, RemoveFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
