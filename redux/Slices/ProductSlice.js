import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";



export const FetchApiCall = createAsyncThunk(
    'ProductsCall',
    async () => {
        const response = await fetch('https://user1703523777215.requestly.tech/Products?');
        const res = await response.json();
        return res;
    }
);



const ProductSlice = createSlice({
    name: 'ProductSlice',
    initialState: [],
    reducers: {
        AddProducts(state, action) {
            state.push(action.payload);
        }
    },
    extraReducers: builder => {
        builder.addCase(FetchApiCall.fulfilled, (state, action) => {
            action.payload.Products.map(item => state.push(item));
        })
    }
});

export const { AddProducts } = ProductSlice.actions;
export default ProductSlice.reducer;