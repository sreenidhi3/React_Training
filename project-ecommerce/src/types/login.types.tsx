export interface LoginReducerActionType{
    type:string;
    payload?:LoginUser | ClearUser;
}

export interface LoginUserState{
    isUserLoggedIn: boolean
    user: LoginUser,
}

export interface LoginUser{
    name?: string;
    token: string;
    email: string;
}

export interface ClearUser{
    isUserLoggedIn : false
}

export interface LoginRequestType{
    email: string,
    password: string
}

export interface LoginResponseType{
    token: string
}

export interface LoginActionsType{
    SET_USER: "SET_USER",
    CLEAR_USER: "CLEAR_USER"
    LOGIN_USER: "LOGIN_USER"
}
  
export const LoginReducerActionsType:LoginActionsType = {
    SET_USER: "SET_USER",
    CLEAR_USER: "CLEAR_USER",
    LOGIN_USER: "LOGIN_USER"
}

export interface setUserActionType{
    type: LoginActionsType["SET_USER"]
    payload: LoginUser;
}

export interface clearUserActionType{
    type: LoginActionsType["CLEAR_USER"],
    payload: ClearUser
}

export interface loginUserActionType{
    type: LoginActionsType["LOGIN_USER"],
    payload: LoginRequestType
}
