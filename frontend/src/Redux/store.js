import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
// import { reducer as authReducer } from "./AuthReducer/reducer";
import { reducer as movieReducer } from "./Winter/reducer";
import {reducer as cartReducer} from './Cart/reducer'
const rootReducer = combineReducers({winter:movieReducer,cart:cartReducer});

export const store = legacy_createStore(movieReducer, applyMiddleware(thunk));
