import { ErrorMessage } from "../types/ErrorMessage";
import { Message } from "../types/Message";
import { Comment } from "../types/CommentType";
import { ReadState } from "../types/ReadingState";

export async function getComment(id:string): Promise<Comment | ErrorMessage>{
    const resp = await fetch(`${import.meta.env.VITE_SERVER_URL}/comments/${id}`);
    if(!resp.ok){
        return {error:"Cannot get the specific comment!"};
    }
    const comment:Comment = await resp.json();
    return comment;
}

export async function getSpecificComments(ids:string[]){
    const comments:Comment[] = [];
    let state:ReadState = "Done"; /*Done-get all comments, Undone- get some part, Error-get nothing*/
    console.log(ids);   
    for(const id of ids){
        const comm = await getComment(id);
        if(!("error" in comm)){
            comments.push(comm);
        }
        else{
            state = "Undone"
        }
    }
    if(comments.length === 0 && ids && ids.length !== 0) state = "Error"
    return {comments, state};
}

export async function postComment(comment:Comment) : Promise<Message| ErrorMessage>{
    const resp = await fetch(`${import.meta.env.SERVER_URL}/comments`, {method:"POST", headers:{"Content-Type":"application/json"}, body:JSON.stringify(comment)});
    if(!resp.ok)
        return {error: "Could not post the comment."};
    else
        return {message: "Comment posted succesfully"};
}

export async function deleteComment(id: string) : Promise<Message | ErrorMessage>{
    const resp = await fetch(`${import.meta.env.SERVER_URL}/comments/${id}`, {method:"DELETE", headers:{"Content-Type":"application/json"}});
    if(!resp.ok)
        return {error: "Could not delete the comment."};
    else
        return {message: "Comment deleted succesfully"};
}