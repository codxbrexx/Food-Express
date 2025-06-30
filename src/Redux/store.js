import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"; 
import favoritesReducer from "./favoritesSlice";


const store = configureStore({
  reducer: {
    cart: cartReducer, 
    favorites: favoritesReducer, 
  },
  
});
export default store; 