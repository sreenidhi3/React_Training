import { PostLoginPayload, PostLoginResponse } from "../types/login.types";

export const postLogin = (payload:PostLoginPayload):Promise<PostLoginResponse>=>{
    return fetch("https://reqres.in/api/login", {
            method: "POST", 
            headers: { 'Content-Type': 'application/json' }, 
            body: JSON.stringify(payload)
        })
        .then((res) => res.json().then((data:PostLoginResponse)=>data) )
}