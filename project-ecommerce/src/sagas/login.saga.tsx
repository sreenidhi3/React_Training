import { call,put, all, takeEvery, takeLatest, fork } from "redux-saga/effects"
import { login } from "../login.service";
import { loginUserAction, setUserAction } from "../actions/login.actions";
import { LoginResponseType, LoginActionsType, LoginReducerActionsType, LoginRequestType, loginUserActionType } from "../types/login.types";


export function* workerLoginSaga(action:loginUserActionType){
    try{
        console.log("in the worker login saga ");
        console.log(action);
        // yield put(setIsLoadingAction(true))
        const response:LoginResponseType = yield call(login, action.payload)
        console.log("resp", response)
        yield put(setUserAction({email: action.payload.email,...response}))
        // yield put(setIsLoadingAction(false))
    }catch(err){
        console.log(err)
    }
}

export function* watcherLoginSaga(){
    console.log("watcher login saga" )
    yield takeEvery(LoginReducerActionsType.LOGIN_USER, workerLoginSaga)
}