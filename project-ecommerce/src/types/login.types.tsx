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
