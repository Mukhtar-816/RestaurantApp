import { createSlice } from "@reduxjs/toolkit";



const CartSlice = createSlice({
    name: 'CartSlice',
    initialState: [],
    reducers: {
        AddtoCart(state, action) {
            if (state.some((Items) => Items.id === action.payload.id)) {
                return state = state.filter((item) => item.id !== action.payload.id);
            }
            else {
                state.push(action.payload);
            }
        },
        RemovefromCart(state, action) {

            return state = state.filter((item) => item.id !== action.payload.id);
        },
        IncreaseQty(state, action) {
            let Index = -1;
            state.map((item, index) => {
                if (item.id === action.payload.id) {
                    Index = index;
                }
            });

            if (Index !== -1) {
                state[Index].Qty++;
            }
        },
        DecreaseQty(state, action) {
            let Index = -1;
            state.map((item, index) => {
                if (item.id === action.payload.id) {
                    Index = index;
                }
            });
            if (Index !== -1) {
                state[Index].Qty--;
            }

        }
    }
});


export const { AddtoCart, RemovefromCart, IncreaseQty, DecreaseQty } = CartSlice.actions;
export default CartSlice.reducer;