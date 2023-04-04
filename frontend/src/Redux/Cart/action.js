import {ADD_TO_CART_SUCCESS,ADD_TO_CART_REMOVES, CART_SAVE_SHIPPING_ADDRESS, CART_SAVE_PAYMENT_METHOD} from '../actionTypes'


import axios from "axios";
export const addToCart = (id,qty)=>async(dispatch,getState)=>{
  const {data} = await axios.get(`https://inquisitive-plum-katydid.cyclic.app/products/${id}`)
  dispatch({
    type: ADD_TO_CART_SUCCESS,
      payload:{
        product:data._id,
        name:data.name,
        image:data.image,
        price:data.price,
        countInStock:data.countInStock,
        qty
      }
     
  })
  localStorage.setItem("cartItems", JSON.stringify(getState().cartReducer.cartItems));
}

export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: ADD_TO_CART_REMOVES,
    payload: id,
  });

  localStorage.setItem("cartItems", JSON.stringify(getState().cartReducer.cartItems));
};

export const saveShipAdress = (data) =>dispatch=>{
  dispatch({type:CART_SAVE_SHIPPING_ADDRESS,payload:data})
  localStorage.setItem("shippingAdress",JSON.stringify(data))
}

export const savePaymentMethod = (data)=>(dispatch)=>{
  dispatch({
    type:CART_SAVE_PAYMENT_METHOD,
    payload:data
  });
  localStorage.setItem("paymentMethod",JSON.stringify(data))

}