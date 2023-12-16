import { configureStore } from "@reduxjs/toolkit";
import { productDataReducer, filterSearch, addToCart, addToWishList, removeFromCart, removeFromWishList } from "./silces/dataSlice";
import { searchReducer, changeSearchTerm } from "./silces/searchSlice";

const store = configureStore({
  reducer: {
    productsData: productDataReducer,
    searchTerm: searchReducer,
  },
});

export { store, filterSearch, changeSearchTerm, removeFromCart,removeFromWishList,addToCart,addToWishList };
