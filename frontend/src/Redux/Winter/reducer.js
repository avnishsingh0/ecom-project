import { WINTER_DATA_FAILURE, WINTER_DATA_REQUEST, WINTER_DATA_SUCCESS } from "../actionTypes";



const initialStates ={
    isLoading: false,
    isError:false,
    winterdata:[],
}
const reducer = (state = initialStates, { type, payload }) => {
    switch (type) {
      case WINTER_DATA_REQUEST: {
        return {
          ...state,
          isLoading: true,
          isError:false,
        };
      }
      case WINTER_DATA_SUCCESS: {
        return {
          ...state,
          isLoading: false,
          winterdata:payload,
          isError:false
        };
      }
      case WINTER_DATA_FAILURE: {
        return {
          ...state,
          isLoading: false,
          isError:true
        };
      }

      default:
      return state;
  }
};

export { reducer };