import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Products from "../constants/ProductsApi";
import { AddProducts } from "../redux/Slices/ProductSlice";

const ProductsApi = () => {

    //States 
    // const [ProductsData, setProductsData] = useState();
    const Product = useSelector((state) => state.Products)


    const dispatch = useDispatch();

    useEffect(() => {
        // setProductsData(Products),

        if (Product.length === 0) {
            Products.map((item) => {
                dispatch(AddProducts(item))
                console.log('products added')
            })
        }
        else {
            // do nothing
        }
    }, [1]);


};


export default ProductsApi;