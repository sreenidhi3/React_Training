import { ReducerActionType } from "../reducers/users.reducer";
import { User } from "../types/users.types";
interface actionsType{
  FETCH_USERS: "FETCH_USERS",
  FETCH: "FETCH",
  SET_USERS: "SET_USERS"
}

export const actions:actionsType = {
  FETCH_USERS: "FETCH_USERS",
  FETCH: "FETCH",
  SET_USERS: "SET_USERS"
}

export const setUsersListAction = (payload: User[]):setUsersListActionType => {
  console.log("from actions", payload)
  return ({
  type: "SET_USERS",
  payload: payload
});
}

export const fetchUserAction = ():fetchUserActionType=>{
  return({
    type: "FETCH_USERS"
  })
}

export const fetchAction = ():fetchActionType=>{
  console.log("at fetchAction creator")
  return({
    type: actions.FETCH
  })
}

export interface setUsersListActionType{
  type: "SET_USERS",
  payload: User[]
}

export interface fetchUserActionType{
    type: "FETCH_USERS"
}

export interface fetchActionType{
  type: "FETCH"
}

// export const fetchUsersAction = ()=>{
//   console.log("at actions")
//   return({
//     type: "FETCH_USERS", 
//     payload: []
//   })
// }
