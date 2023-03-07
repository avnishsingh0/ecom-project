import { APPLY_COUPON_DISCOUNT, CART_PAGE_TOTAL_AMOUNT, CART_PAGE_TOTAL_ITEMS, GET_CART_DATA_FAILURE, GET_CART_DATA_REQUEST, GET_CART_DATA_SUCCESS, QUANTITY_CHANGE_SUCCESS } from "../actionTypes";
import axios from 'axios'
const getCartDataRequestAction = () => {
    return { type: GET_CART_DATA_REQUEST };
  };
  
  const getCartDataSuccessAction = (payload) => {
    return { type: GET_CART_DATA_SUCCESS, payload };
  };
  
  const getCartDataFailureAction = () => {
    return { type: GET_CART_DATA_FAILURE };
  };

  const quantityChangeSuccess = () =>{
    return {type : QUANTITY_CHANGE_SUCCESS};
  }
  
  const getCartPageTotalAmount = (payload) => {
    return {type : CART_PAGE_TOTAL_AMOUNT, payload }
  }
  
  const getCartPageTotalItems = (payload) => {
    return {type : CART_PAGE_TOTAL_ITEMS, payload }
  }
  
  const applyCouponDiscount = (payload) => {
    return {type : APPLY_COUPON_DISCOUNT, payload}
  }

  export const getCartData = (dispatch) => {
    dispatch(getCartDataRequestAction());
  
    axios
    .get("http://localhost:8080/cart")
    .then((res)=>{
      dispatch(getCartDataSuccessAction(res.data));
      dispatch(handleTotalAmount(res.data));
      dispatch(handleTotalItems(res.data));
    })
    .catch((err)=>{
      dispatch(getCartDataFailureAction());
    })
  }

  export const handleQuantity = (id, price, quantity) => (dispatch) => {
    axios.patch(`http://localhost:8080/cart/${id}`,{
      quantity : +quantity,
      totalPrice : (+price) * quantity
    }).then((res)=>{
      axios.get(`http://localhost:8080/cart`).then((res)=>{
        dispatch(getCartDataSuccessAction(res.data));
        dispatch(handleTotalAmount(res.data));
        dispatch(handleTotalItems(res.data));
      })
    })
  }
  
  export const handleRemove = (id) => (dispatch) => {
    axios.delete(`http://localhost:8080/cart/${id}`).then((res)=>{
      axios.get(`http://localhost:8080/cart`).then((res)=>{
        dispatch(getCartDataSuccessAction(res.data));
        dispatch(handleTotalAmount(res.data));
        dispatch(handleTotalItems(res.data));
      })
    }).catch((err)=>{
  
    })
  }
  
  
  export const handleTotalAmount = (data) => (dispatch) => {
    let totalCartPrice = 0
    data?.map((el)=>{
      totalCartPrice = totalCartPrice + el.totalPrice
    })
    dispatch(getCartPageTotalAmount(+totalCartPrice))
  }
  
  
  export const handleTotalItems = (data) => (dispatch) => {
    let totalItems = 0
    data?.map((el)=>{
      totalItems = totalItems + el.quantity
    })
    dispatch(getCartPageTotalItems(+totalItems))
  }
  
  export const handleCouponDiscount = (coupon, amount) => (dispatch) => {
    let discount = 0;
    if(coupon === "masai30"){
      discount = amount * 0.3
    }
    dispatch(applyCouponDiscount(Math.round(+discount)))
  }