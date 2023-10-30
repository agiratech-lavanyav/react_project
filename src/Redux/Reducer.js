import { combineReducers } from "redux";
import authReducer from "./AuthReducer";
import userReducer from "./UserReducer";
import cartReducer from "./CartReducer";

const reducer = combineReducers({
  authReducer, userReducer, cartReducer
});

export default reducer;
