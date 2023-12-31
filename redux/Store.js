import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./Slices/ProductSlice/ProductSlice";
import CartSlice from "./Slices/CartSlice/CartSlice";
import UserSlice from "./Slices/UserSlice/UserSlice";


const Store = configureStore({
    reducer: {
        Products: ProductSlice,
        Cart: CartSlice,
        Users: UserSlice
    }
});


export default Store;