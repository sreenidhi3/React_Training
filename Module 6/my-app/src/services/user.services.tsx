import { PostLoginPayload, PostLoginResponse } from "../types/login.types";
import { UsersResponse } from "../types/users.types";

export const getUsers = ():Promise<UsersResponse>=>{
    return fetch("https://reqres.in/api/users")
        .then((res) => res.json()
        ).then((data)=>{
            return data as UsersResponse
        })
}