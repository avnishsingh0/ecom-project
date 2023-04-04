import axios from "axios";
import { ORDER_CREATE_FAIL, ORDER_CREATE_REQUEST, ORDER_CREATE_SUCCESS } from "../actionTypes";


export const createOrder = (order) => async (dispatch, getState) => {
    try {
      dispatch({
        type: ORDER_CREATE_REQUEST,
      });
      const {
        userLoginReducer: { userInfo },
      } = getState();
      const config = {
        headers: {
          "Contnet-Type": "application/json",
          Authorization: `Bearer${userInfo.token}`,
        },
      };
      const { data } = await axios.post("https://inquisitive-plum-katydid.cyclic.app/order", order, config);
      dispatch({ type: ORDER_CREATE_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: ORDER_CREATE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };