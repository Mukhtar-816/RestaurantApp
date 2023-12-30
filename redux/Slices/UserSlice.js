import { createSlice } from "@reduxjs/toolkit";
import { Alert } from "react-native";


const UserSlice = createSlice({
    name: 'UserSlice',
    initialState: [],
    reducers: {
        AddNewUser(state, action) {
            state.push({
                id: Math.floor(Math.random() * 2),
                email: action.payload.email,
                username: action.payload.username,
                password: action.payload.password
            })
            Alert.alert('User Created', 'Welcome!')
        }
    }
});


export const { AddNewUser } = UserSlice.actions;
export default UserSlice.reducer;