import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import thunk from "redux-thunk";

import animeReducer from "./animeReducer";

const rootReducer = combineReducers({
    anime: animeReducer,
})

const store = createStore(rootReducer, applyMiddleware(thunk))

window.store = store;
export default store;