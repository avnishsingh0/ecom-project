


import { ADD_TO_CART_REMOVES, ADD_TO_CART_SUCCESS, CART_SAVE_PAYMENT_METHOD, CART_SAVE_SHIPPING_ADDRESS } from "../actionTypes"


export const cartReducer = (state={cartItems:[]},action) =>{
  switch(action.type){
    case ADD_TO_CART_SUCCESS:
      const item= action.payload
      const existItem= state.cartItems.find(x=> x.product === item.product)
      if(existItem){
        return{
          ...state,
          cartItems:state.cartItems.map(x=>x.product===existItem.product ? item:x)
        }
      }else{
        return {
          ...state, cartItems:[...state.cartItems,item]
        }
      }
      case ADD_TO_CART_REMOVES:
        return {
          ...state,
          cartItems:state.cartItems.filter(x=>x.product !== action.payload)
        }
      case CART_SAVE_SHIPPING_ADDRESS:
        return{...state,shippingAdress:action.payload}
      case CART_SAVE_PAYMENT_METHOD:
        return {...state, paymentMethod:action.payload}
        default:
        return state;
  }

}
