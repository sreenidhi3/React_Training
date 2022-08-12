import { User } from "../types/users.types"

export const fetchUsers=():Promise<User[]>=>{ 
    return fetch("https://api.github.com/users").then(res=>{  return res.json()}).catch((err)=>{console.log(err)})
}