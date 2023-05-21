import axios from "axios";
import {
       ALL_PRODUCT_REQUEST,
       ALL_PRODUCT_SUCCESS ,
       ALL_PRODUCT_FAIL,
       PRODUCT_DETAILS_REQUEST,
       PRODUCT_DETAILS_SUCCESS,
       PRODUCT_DETAILS_FAIL,
       CLEAR_ERRORS,
       NEW_PRODUCT_REQUEST,
       NEW_PRODUCT_SUCCESS,
       NEW_PRODUCT_FAIL,
       DELETE_PRODUCT_REQUEST,
       DELETE_PRODUCT_SUCCESS,
       DELETE_PRODUCT_FAIL,
       UPDATE_PRODUCT_REQUEST,
       UPDATE_PRODUCT_SUCCESS,
       UPDATE_PRODUCT_FAIL,
       BIDDED_PRODUCT_REQUEST,
       BIDDED_PRODUCT_SUCCESS,
       BIDDED_PRODUCT_FAIL,
       SELLER_PRODUCT_REQUEST,
       SELLER_PRODUCT_SUCCESS,
       SELLER_PRODUCT_FAIL,
} from "../constants/productConstants";

export const getProduct = (keyword="" , currentPage=1 , price = [0, 2500000] , category) => async (dispatch) => {
    try {  
        
dispatch({ type:ALL_PRODUCT_REQUEST });
// startingBid[gte]=400&startingBid[lt]=2000
let link = `/products?keyword=${keyword}&page=${currentPage}&startingBid[gte]=${price[0]}&startingBid[lt]=${price[1]}`;

if(category){
    link = `/products?keyword=${keyword}&page=${currentPage}&startingBid[gte]=${price[0]}&startingBid[lt]=${price[1]}&category=${category}`;
}

const {data} = await axios.get(link);

dispatch({
    type:ALL_PRODUCT_SUCCESS,
    payload:data,
})

    } catch (error) {
        dispatch({
            type: ALL_PRODUCT_FAIL,
            payload:error.response.data.message,
        });
        
    }

};

//get single product
export const getProductDetails = (id) => async (dispatch) => {
    try {  
        
dispatch({ type:PRODUCT_DETAILS_REQUEST });

const {data} = await axios.get(`/product/${id}`);

dispatch({
    type:PRODUCT_DETAILS_SUCCESS,
    payload:data,
})

    } catch (error) {
        dispatch({
            type: PRODUCT_DETAILS_FAIL,
            payload:error.response.data.message,
        });
        
    }

};

