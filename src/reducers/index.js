import usersReducer from "./usersReducer";
import {createStore, combineReducers, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension"
import thunk from "redux-thunk"

const rootReducer = combineReducers({
    users: usersReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))