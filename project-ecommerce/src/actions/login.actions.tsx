import { ClearUser, clearUserActionType, LoginErrorType, LoginRequestType, LoginUser, loginUserActionType, setLoginErrorType, setUserActionType } from "../types/login.types";

  //ACTIONS 
  export const loginUserAction=(payload:LoginRequestType):loginUserActionType=>{
    return({type: "LOGIN_USER", payload})
  }

  export const setUserAction = (payload: LoginUser):setUserActionType=>{
    return({type:"SET_USER", payload})
  }
  
  export const clearUserAction = ():clearUserActionType=>{
    console.log("at fetchAction creator")
    return({type:"CLEAR_USER", payload: {isUserLoggedIn: false}})
  }
  
  export const setLoginError=(payload: LoginErrorType):setLoginErrorType=>{
    return({type:"LOGIN_ERROR", payload})
  }