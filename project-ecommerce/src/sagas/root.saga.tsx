import { call,put, all, takeEvery, takeLatest, fork } from "redux-saga/effects"
import { watcherLoginSaga } from "./login.saga";
import { watcherSignUpSaga } from "./signup.saga";
export function* rootSaga() {
    console.log("in the root saga ");
    yield all([call(watcherLoginSaga), call(watcherSignUpSaga)])
}