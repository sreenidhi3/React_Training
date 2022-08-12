import { useDispatch } from 'react-redux'
import { setIsLoadingAction } from '../actions/users.action'
import {User} from '../types/users.types'

export interface ReducerActionType{
    type:string,
    payload?:User[] | boolean
}

interface UserState{
    users: User[],
    isLoading: boolean
}

let initialState:UserState = {
    users: [],
    isLoading: false
}
export const userReducer = (state=initialState, action: ReducerActionType):UserState=>{
    
    switch(action.type){
        case "SET_USERS":{
            console.log(action.payload);
            return {...state, users: action.payload as User[]}}
        case "FETCH_USERS":
            return state
        case "SET_IS_LOADING":
            return {...state, isLoading: action.payload as boolean}
        case "FETCH":
            console.log("at FETCH case in reducer")
            return state
        default:
            return state
    }
}