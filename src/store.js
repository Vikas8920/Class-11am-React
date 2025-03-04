import { combineReducers, createStore } from "redux";
import authReducer from "./Component/authReducer";

const rootReducer = combineReducers({
    auth: authReducer,
})

const store = createStore(rootReducer)

export default store
