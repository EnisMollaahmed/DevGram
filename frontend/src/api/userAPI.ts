import { User } from "../types/UserType";
import { ErrorMessage } from "../types/ErrorMessage";
import { Message } from "../types/Message";

export async function putUser(user:User){
    const resp = await fetch(`${import.meta.env.SERVER_URL}/users/${user.id}`, {method: 'PUT', headers:{'Content-Type':'application/json'}, body:JSON.stringify(user)});
    const result: Message | ErrorMessage = resp.ok ? {message: "User updated properly!"} : {error:"Cannot update the user"};
    return result
}