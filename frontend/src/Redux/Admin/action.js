import { ADMIN_ERROR, ADMIN_REQUEST, GET_ADMIN_SUCESS, POST_ADMIN_SUCESS } from "../actionTypes"
import axios from 'axios'
export const getAdminSucess = (payload) =>{
    return {type: GET_ADMIN_SUCESS,payload}
}

export const postAdminSucess= ()=>{
    return {type:POST_ADMIN_SUCESS}
}

export const adminRequest= ()=>{
    return {type:ADMIN_REQUEST}
}
export const adminError= ()=>{
    return {type:ADMIN_ERROR}
}

export const addProduct =(payLoad)=>(dispatch)=>{
    dispatch(adminRequest())
    axios.post("https://inquisitive-plum-katydid.cyclic.app/Winter",payLoad).then(()=>{
        dispatch(postAdminSucess());

    })
    .catch((error)=>{
        dispatch(adminError)
    })
}

export const getAdmin=(dispatch)=>{
    dispatch(adminRequest());
    axios.get("https://inquisitive-plum-katydid.cyclic.app/Winter")
    .then((res)=>{
        dispatch(getAdminSucess(res.data));
    })
    .catch((error)=>{
        dispatch(adminError())
    })
}
