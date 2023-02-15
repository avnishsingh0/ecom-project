import { ADMIN_ERROR, ADMIN_REQUEST, GET_ADMIN_SUCESS, POST_ADMIN_SUCESS } from "../actionTypes"

const initialState={
    isLoading:false,
    admin:[],
    isError:false
}
export const reducer = (state= initialState,{type,payload})=>{
    // console.log(payload);
    switch(type){
        case ADMIN_REQUEST:
            return {...state, isLoading:true};
        case ADMIN_ERROR:
            return {...state, isLoading:false, isError:true};
        case GET_ADMIN_SUCESS:
            return {...state, isLoading:false, admin:payload};
        case POST_ADMIN_SUCESS:
            return {...state, isLoading:false}
        default:
            return state;
    }
}