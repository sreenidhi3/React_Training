import { ReducerActionType } from "../reducers/users.reducer";
import { User } from "../types/users.types";
// TYPES DEFINITION

interface actionsType{
  FETCH_USERS: "FETCH_USERS",
  FETCH: "FETCH",
  SET_USERS: "SET_USERS",
  SET_IS_LOADING: "SET_IS_LOADING"
}

export interface setUsersListActionType{
  type: "SET_USERS",
  payload: User[]
}

export interface setIsLoadingActionType{
  type: "SET_IS_LOADING",
  payload: boolean
}

export interface fetchUserActionType{
    type: "FETCH_USERS"
}

export interface fetchActionType{
  type: "FETCH"
}

//ACTIONS 

export const actions:actionsType = {
  FETCH_USERS: "FETCH_USERS",
  FETCH: "FETCH",
  SET_USERS: "SET_USERS",
  SET_IS_LOADING: "SET_IS_LOADING"
}

export const setUsersListAction = (payload: User[]):setUsersListActionType => {
  console.log("from actions", payload)
  return ({
  type: "SET_USERS",
  payload: payload
});
}

export const setIsLoadingAction = (payload: boolean):setIsLoadingActionType => {
  console.log("from actions", payload)
  return ({
  type: "SET_IS_LOADING",
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

// export const fetchUsersAction = ()=>{
//   console.log("at actions")
//   return({
//     type: "FETCH_USERS", 
//     payload: []
//   })
// }
