import { combineReducers } from "redux";
import homeReducer from "./Services/reducer";

export default combineReducers({
    home:homeReducer,
})