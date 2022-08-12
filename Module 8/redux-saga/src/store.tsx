import { combineReducers, legacy_createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import {userReducer} from "./reducers/users.reducer";
import {rootSaga} from "./sagas/users.sagas";
// import {watcherFetchUserSaga} from "./sagas/users.sagas"

export const sagaMiddleware = createSagaMiddleware()
console.log(sagaMiddleware)
const rootReducer = combineReducers({userReducer});
const store = legacy_createStore(rootReducer, applyMiddleware(sagaMiddleware));
console.log(store)
export type RootState = ReturnType<typeof rootReducer>;

sagaMiddleware.run(rootSaga)
export default store;

