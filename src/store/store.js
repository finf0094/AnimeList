import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import thunk from "redux-thunk";

import animeReducer from "./animeReducer";
import postReducer from "./postReducer";

const rootReducer = combineReducers({
    anime: animeReducer,
    post: postReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))

window.store = store;
export default store;