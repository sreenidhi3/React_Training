// import { setUsersList } from "./actions/users.action"
// import { fetchUsers } from "./services/users.services"
import {all, call} from 'redux-saga/effects'
// import { watcherFetchUserSaga } from './sagas/users.sagas'
import {User} from './types/users.types'
 
// function* fetchUserSaga():any{
//         console.log("at saga")
//         const data = yield fetch("https://api.github.com/users").then(res=>res.json()).then(data=>data as User[])
//         yield put(setUsersList(data))
// }

// export function* userSaga(){
//     yield takeLatest('FETCH_USER', fetchUserSaga)
// }

// export default function* rootSaga() {
//     yield all([watcherFetchUserSaga()])
//   }