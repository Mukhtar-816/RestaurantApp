import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchApiCall } from "../redux/Slices/ProductSlice";

const ProductsApiCall = () => {

    const Products = useSelector((state) => state.Products)
    const dispatch = useDispatch();

    useEffect(() => {
        if (Products.length == 0) {
            dispatch(FetchApiCall())
        }
    }, [Products])

};


export default ProductsApiCall;