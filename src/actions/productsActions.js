import axios from 'axios'
import { PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS,
     PRODUCT_DETAILS_FAIL, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS } from '../constants/productsConstants'

export const listProducts = () => async (dispatch) => {
    try {
        dispatch({type: PRODUCT_LIST_REQUEST})
        const {data} = await axios.get('https://fakestoreapi.com/products/');

        dispatch({
            type: PRODUCT_LIST_SUCCESS,
            payload:data
        })
    }
    catch(error) {
        console.error('product error:', error.response ? error.response.data : error.message);
        dispatch({
            type: PRODUCT_LIST_FAIL,
            payload: error.response && error.response.data.detail ? error.response.data.detail 
            : error.message,
        })
    }
}


export const listProductDetails = (id) => async (dispatch) => {
    try {
        dispatch({type: PRODUCT_DETAILS_REQUEST})
        const {data} = await axios.get(`${baseUrl}/stores/${id}/products`);

        dispatch({
            type: PRODUCT_DETAILS_SUCCESS,
            // payload:data[0]
            payload: data
        })
    }
    catch(error) {
        console.error('productdetails error:', error.response ? error.response.data : error.message);
        dispatch({
            type: PRODUCT_DETAILS_FAIL,
            payload: error.response && error.response.data.detail ? error.response.data.detail 
            : error.message,
        })
    }
}


export const listCategories = () => async (dispatch) => {
    try {
        dispatch({type: CATEGORY_LIST_REQUEST})
        const {data} = await axios.get(`${baseUrl}/api/stores/categories`);

        dispatch({
            type: CATEGORY_LIST_SUCCESS,
            // payload:data[0]
            payload: data
        })
    }
    catch(error) {
        dispatch({
            type: CATEGORY_LIST_FAIL,
            payload: error.response && error.response.data.detail ? error.response.data.detail 
            : error.message,
        })
    }
}