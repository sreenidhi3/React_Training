import { call,put, all, takeEvery, takeLatest, fork } from "redux-saga/effects"
import { setUsersListAction, actions, fetchUserActionType } from "../actions/users.action"
import { ReducerActionType } from "../reducers/users.reducer"
import { fetchUsers } from "../services/users.services"
import { User, UsersResponseType } from "../types/users.types"

export function* watcherFetchUserSaga(){
    console.log("watcher saga" )
    yield takeEvery(actions.FETCH, workerFetchUserSaga)
}

export function* workerFetchUserSaga(action : fetchUserActionType){
    try{
        console.log("in the worker saga ");
        const response:User[] = yield call(fetchUsers)
        console.log("resp", response)
        yield put(setUsersListAction(response as User[]))
    }catch(err){
        console.log(err)
    }
}

export function* rootSaga() {
    console.log("in the root saga ");
    yield all([call(watcherFetchUserSaga)])
}
// export function* fetchUserSaga(action:ReducerActionType) {
//     try{
//         const data = yield call(fetchUsers)
//     }
//     console.log('Hello Sagas!')
//   }

// export function* fetchUsersGF():Generator<Promise<User[]>> {
//     try{
//         const response = yield fetchUsers()
//         const setResponse = yield setUsersList(response)
//         //yield fetchUsers()
//         console.log("first yield", response)
//     }catch(err){
//         console.log(err)
//     }
//     // return fetchUsers().then(data=>{
//     //   dispatch(setUsersList(data))
//     // })
//   }
// const itr:Generator<Promise<User[]>, void, unknown> = fetchUsersGF()
// console.log(itr.next());
// const a :IteratorResult<Promise<User[]>,void>= itr.next();
// const v = a.value as Promise<User[]>;
// v.then(res=>{
//     itr.next(res)
// })

