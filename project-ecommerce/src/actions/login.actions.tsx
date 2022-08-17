import { ClearUser, LoginRequestType, LoginUser } from "../types/login.types";

interface LoginActionsType{
    SET_USER: "SET_USER",
    CLEAR_USER: "CLEAR_USER"
  }
  
  export interface setUserActionType{
    type: "SET_USER",
    payload: LoginUser;
  }
  
  export interface clearUserActionType{
    type: "CLEAR_USER",
    payload: ClearUser
  }

  export interface loginUserActionType{
    type: "LOGIN_USER",
    payload: LoginRequestType
  }
  
  export const actions:LoginActionsType = {
    SET_USER: "SET_USER",
    CLEAR_USER: "CLEAR_USER"
  }

  //ACTIONS 
  export const loginUserAction=()=>{

  }

  export const setUserAction = (payload: LoginUser):setUserActionType=>{
    return({type:"SET_USER", payload})
  }
  
  export const clearUserAction = ():clearUserActionType=>{
    console.log("at fetchAction creator")
    return({type:"CLEAR_USER", payload: {isUserLoggedIn: false}})
  }
  