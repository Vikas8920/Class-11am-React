import { configureStore } from "@reduxjs/toolkit";
import addToCartReducer from "./addToCart"; // Importing the default export

const store = configureStore({
    reducer: {
        cart: addToCartReducer, // Using correct reducer reference
    },
});

export default store;
