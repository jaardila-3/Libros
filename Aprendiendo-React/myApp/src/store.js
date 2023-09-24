//this file is for use of context with the redux toolkit
import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "./components/cart/cartSlice";

export default configureStore({
    reducer: {
        cart: cardReducer,
    },
})