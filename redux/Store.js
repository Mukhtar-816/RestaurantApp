import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./Slices/ProductSlice";
import CartSlice from "./Slices/CartSlice";


const Store = configureStore({
    reducer: {
        Products : ProductSlice,
        Cart : CartSlice
    }
});


export default Store;