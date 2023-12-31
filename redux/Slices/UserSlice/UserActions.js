import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



export const UsersApi = createAsyncThunk(
    'UsersApi',
    async () => {
        const response = await axios.get('http://192.168.10.18:3001/getUsers');
        const res = response.data;
        return res;
    }
);

export const CreateUser = createAsyncThunk(
    'CreateUser',
    async (Data) => {
        axios({
            url: 'http://192.168.10.18:3001/createUser',
            data: Data,
            method: 'POST',
        })
            .then((res) => res);
        return res;
    }
);


