import { createSlice } from "@reduxjs/toolkit";
import { CreateUser, UsersApi } from "./UserActions";


const UserSlice = createSlice({
    name: 'UserSlice',
    initialState: [],
    extraReducers: builer => {
        builer.addCase(UsersApi.fulfilled, (state, action) => {
            action.payload.map(item => state.push(item))
        }),
            builer.addCase(CreateUser.fulfilled, (state, action) => {
                state.push(action.payload);
            })
    }
});

export default UserSlice.reducer;