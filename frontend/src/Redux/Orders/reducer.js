import { ORDER_CREATE_FAIL, ORDER_CREATE_REQUEST, ORDER_CREATE_SUCCESS } from "../actionTypes";

export const orderCreateReducer = (state = {}, action) => {
    switch (action.type) {
      case ORDER_CREATE_REQUEST:
        return { loading: true };
      case ORDER_CREATE_SUCCESS:
        return { loading: false, success: true, Order: action.payload };
      case ORDER_CREATE_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };