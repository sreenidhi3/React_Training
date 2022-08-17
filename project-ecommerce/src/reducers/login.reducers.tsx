import { useReducer } from "react";
import { LoginReducerActionType, LoginUser, LoginUserState } from "../types/login.types";

let initialState:LoginUserState = {
    isUserLoggedIn: true,
    user: {
        name: "",
        email:"",
        token:""
    }
}

export const loginReducer = (state=initialState, action: LoginReducerActionType):LoginUserState=>{
    switch(action.type){
        case "SET_USER":{
            console.log(action.payload);
            return {...state, user: action.payload as LoginUser, isUserLoggedIn: true}
        }
        case "CLEAR_USER":{
            console.log(action.payload);
            return {...initialState, isUserLoggedIn:false}
        }
        default:
            return state
    }
}