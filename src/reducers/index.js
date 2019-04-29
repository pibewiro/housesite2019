import {combineReducers} from "redux";
import houseReducer from "./houseReducers"


export default combineReducers({
    houses:houseReducer,
})