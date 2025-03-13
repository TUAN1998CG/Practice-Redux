import {combineReducers, createStore} from "redux";
import counterReducer from "./reducers/counterReducers.js";
import todoReducer from "./reducers/todoReducer.js";

const store = createStore(
    combineReducers({
    counter: counterReducer,
    todo:todoReducer
}));
export default store;