import {
  legacy_createStore,
  applyMiddleware,
  combineReducers,
  compose,
  
} from "redux";
import {userLoginReducer,userRegisterReducer,userDetailsReducer,userUpdateProfileReducer} from "./Auth/reducer"

import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from "redux-thunk";
import { reducer as winterReducer } from "./Winter/reducer";
import { productDetailsReducer as singleReducer } from "./SingleProduct/reducer";
import { cartReducer } from "../Redux/Cart/reducer";
import {orderCreateReducer} from "../Redux/Orders/reducer"
const shippingAddress = localStorage.getItem("shippingAdress")
? JSON.parse(localStorage.getItem("shippingAdress"))
:{}
const rootReducer = combineReducers({
  winterReducer,
  cartReducer,
  singleReducer,
  userLoginReducer,
  userRegisterReducer,
  userDetailsReducer,
  userUpdateProfileReducer,
  orderCreateReducer
  
});
const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;
const cartItemsFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];
const initialState  = {
    cartReducer: {
        cartItems: cartItemsFromStorage,
        shippingAdress: shippingAddress,
      },
      userLoginReducer: { userInfo: userInfoFromStorage },
};


const middleware = [thunk];
 export const store = legacy_createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
