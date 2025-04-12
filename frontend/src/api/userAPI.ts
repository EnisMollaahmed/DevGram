import { User } from "../types/UserType";

export async function putUser(user:User){
    const resp = await fetch(`${import.meta.env.SERVER_URL}/users/${user.id}`, {method: 'PUT', headers:{'Content-Type':'application/json'}, body:JSON.stringify(user)});
    
}