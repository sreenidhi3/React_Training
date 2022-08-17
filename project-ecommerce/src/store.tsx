import { combineReducers, configureStore, legacy_createStore } from "@reduxjs/toolkit";
import { loginReducer } from "./reducers/login.reducers";

const rootReducer = combineReducers({loginReducer});
export const store = legacy_createStore(rootReducer);
console.log(store)

export type RootState = ReturnType<typeof rootReducer>;
export default store;

