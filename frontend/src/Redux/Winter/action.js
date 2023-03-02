import { ADD_TO_CART_SUCCESS, WINTER_DATA_FAILURE, WINTER_DATA_REQUEST, WINTER_DATA_SUCCESS } from "../actionTypes";
import axios from "axios";

const addToCartSuccess = () => {
    return {type : ADD_TO_CART_SUCCESS}
  }

export const getWinterData=(params)=>async(dispatch)=>{
    dispatch({type:WINTER_DATA_REQUEST});
    try {
        let res=await axios.get("http://localhost:8080/Winter",params);
        dispatch({type:WINTER_DATA_SUCCESS,payload:res.data})
    } catch (error) {
        dispatch({type:WINTER_DATA_FAILURE})
    }
}

export const addToCart = (item) => (dispatch) => {
    axios.post("http://localhost:8080/cart",item).then(()=>{
      dispatch(addToCartSuccess(item))
    })
  } 