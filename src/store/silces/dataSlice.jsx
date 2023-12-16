import { createSlice } from "@reduxjs/toolkit";
import { data } from "../../components/data";

const productDataSlice = createSlice({
  name: "data",
  initialState: {
    data: data,
    wishList: [],
    cart: []
  },
  reducers: {
    filterSearch(state, action) {
      state.data = data.filter((item) =>
        item.name.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
    addToWishList(state, action){
        state.wishList.push(action.payload)
    },
    addToCart(state, action){
        state.cart.push(action.payload)
    },
    removeFromWishList(state, action){
        state.wishList = state.wishList.filter(item => item.id !== action.payload.id)
    },
    removeFromCart(state, action){
        state.cart = state.cart.filter(item => item.id !== action.payload.id)
    }
  },
});

export const productDataReducer = productDataSlice.reducer;
export const { filterSearch,addToCart, addToWishList, removeFromCart, removeFromWishList } = productDataSlice.actions;
