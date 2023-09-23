import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "./components/cart/cartSlice";

export default configureStore({
    reducer: {
        cart: cardReducer,
    },
})