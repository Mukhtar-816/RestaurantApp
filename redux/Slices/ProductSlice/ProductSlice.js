import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



export const ProductsCall = createAsyncThunk(
    'ProductsCall',
    async () => {
        const response = await axios.get('http://192.168.10.18:3001/getProducts');
        const res = response.data;
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
        builder.addCase(ProductsCall.fulfilled, (state, action) => {
            action.payload.map(item => state.push(item));
        })
    }
});

export const { AddProducts } = ProductSlice.actions;
export default ProductSlice.reducer;