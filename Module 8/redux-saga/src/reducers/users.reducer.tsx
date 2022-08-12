import {User} from '../types/users.types'

export interface ReducerActionType{
    type:string,
    payload?:User[]
}

interface UserState{
    users: User[]
}

let initialState:UserState = {
    users: []
}
export const userReducer = (state=initialState, action: ReducerActionType):UserState=>{
    switch(action.type){
        case "SET_USERS":{
            console.log(action.payload);
            
            return {...state, users: action.payload as User[]}}
        case "FETCH_USERS":
            return state
        case "FETCH":
            console.log("at FETCH case in reducer")
            return state
        default:
            return state
    }
}