import { call,put, all, takeEvery, takeLatest, fork } from "redux-saga/effects"
import { watcherLoginSaga } from "./login.saga";
export function* rootSaga() {
    console.log("in the root saga ");
    yield all([call(watcherLoginSaga)])
}