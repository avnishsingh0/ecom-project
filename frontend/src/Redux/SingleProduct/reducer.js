import { SINGLE_PRODUCT_DATA_FAILURE, SINGLE_PRODUCT_DATA_REQUEST, SINGLE_PRODUCT_DATA_SUCCESS } from "../actionTypes";

export const productDetailsReducer = (
    state = { product: { reviews: [] } },
    action
  ) => {
    switch (action.type) {
      case SINGLE_PRODUCT_DATA_REQUEST:
        return { loading: true, ...state };
      case SINGLE_PRODUCT_DATA_SUCCESS:
        return { loading: false, product: action.payload };
      case SINGLE_PRODUCT_DATA_FAILURE:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  