import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./Slices/ProductSlice";
import CartSlice from "./Slices/CartSlice";
import UserSlice from "./Slices/UserSlice";


const Store = configureStore({
    reducer: {
        Products: ProductSlice,
        Cart: CartSlice,
        Users: UserSlice
    }
});


export default Store;