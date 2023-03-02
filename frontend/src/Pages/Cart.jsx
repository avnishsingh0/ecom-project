import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCart, getCartData } from '../Redux/Cart/action';
import { useLocation, useSearchParams } from "react-router-dom";
import { getWinterData } from '../Redux/Winter/action';
const Cart = () => {
      
  return (
    <div>Cart</div>
  )
}

export default Cart