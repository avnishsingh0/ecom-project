import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
// import { reducer as authReducer } from "./AuthReducer/reducer";
import { reducer as movieReducer } from "./Winter/reducer";

const rootReducer = combineReducers({movies:movieReducer});

export const store = legacy_createStore(movieReducer, applyMiddleware(thunk));
