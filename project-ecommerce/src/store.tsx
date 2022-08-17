import { combineReducers, configureStore, legacy_createStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({});
export const store = legacy_createStore(rootReducer);

export default store;