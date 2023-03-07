import { legacy_createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
// import { reducer as authReducer } from "./AuthReducer/reducer";
import { reducer as winterReducer } from "./Winter/reducer";
import {reducer as cartReducer} from './Cart/reducer'
const composeEnhancers = window._REDUX_DEVTOOLS_EXTENTION_COMPOSE_ || compose;

const rootReducer = combineReducers({winterReducer, cart:cartReducer});

export const store = legacy_createStore(cartReducer, composeEnhancers(applyMiddleware(thunk)));
