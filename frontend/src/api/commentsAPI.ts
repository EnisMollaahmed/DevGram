import { ErrorMessage } from "../types/ErrorMessage";
import { Comment } from "../types/CommentType";
import { ReadState } from "../types/ReadingState";

export async function getComment(id:string): Promise<Comment | ErrorMessage>{
    const resp = await fetch(`${import.meta.env.VITE_SERVER_URL}/${id}`);
    if(!resp.ok){
        return {error:"Cannot get the specific comment!"};
    }
    const comment:Comment = await resp.json();
    return comment;
}

export async function getSpecificComments(ids:string[]){
    const comments:Comment[] = [];
    let state:ReadState = "Done"; /*Done-get all comments, Undone- get some part, Error-get nothing*/
    for(const id of ids){
        const comm = await getComment(id);
        if(!("error" in comm)){
            comments.push(comm);
        }
        else{
            state = "Undone"
        }
    }
    if(comments.length === 0 && ids.length !== 0) state = "Error"
    return {comments, state};
}