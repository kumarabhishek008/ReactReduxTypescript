import { combineReducers } from "redux";
import TodoReducer from "./Reducers/todoReducer";

export default combineReducers({
    todos : TodoReducer,
     
})
