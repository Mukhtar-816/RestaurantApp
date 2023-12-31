

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { UsersApi } from "../redux/Slices/UserSlice/UserActions";
import { ProductsCall } from "../redux/Slices/ProductSlice/ProductSlice";

const DataApiCall = () => {

    const Products = useSelector((state) => state.Products);
    const Users = useSelector((state) => state.Users);
    const dispatch = useDispatch();

    useEffect(() => {
        if (Products.length == 0) {
            dispatch(ProductsCall())
        }
        if (Users.length == 0) {
            dispatch(UsersApi())
        }
    }, [Products])
};


export default DataApiCall;