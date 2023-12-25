import { createSlice } from "@reduxjs/toolkit";

const ProductSlice = createSlice({
    name: 'ProductSlice',
    initialState: [],
    reducers: {
        AddProducts(state, action) {
            state.push(action.payload);
        }
    }
});

export const { AddProducts } = ProductSlice.actions;
export default ProductSlice.reducer;