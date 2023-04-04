import { SINGLE_PRODUCT_DATA_FAILURE, SINGLE_PRODUCT_DATA_REQUEST, SINGLE_PRODUCT_DATA_SUCCESS } from "../actionTypes";
import axios from 'axios'
export const listProductDetails = (id) => async (dispatch) => {
    try {
      dispatch({ type: SINGLE_PRODUCT_DATA_REQUEST });
      const { data } = await axios.get(`https://inquisitive-plum-katydid.cyclic.app/products/${id}`);
      dispatch({ type: SINGLE_PRODUCT_DATA_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: SINGLE_PRODUCT_DATA_FAILURE,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };