import { WINTER_DATA_FAILURE, WINTER_DATA_REQUEST, WINTER_DATA_SUCCESS } from "../actionTypes";
import axios from "axios";


export const getWinterData=(params)=>async(dispatch)=>{
    dispatch({type:WINTER_DATA_REQUEST});
    try {
        let res=await axios.get("http://localhost:8080/Winter",params);
        console.log(res)
        dispatch({type:WINTER_DATA_SUCCESS,payload:res.data})
    } catch (error) {
        dispatch({type:WINTER_DATA_FAILURE})
    }
}