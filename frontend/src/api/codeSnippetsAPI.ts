import { CodePost } from "../types/CodePostType";
import { ErrorMessage } from "../types/ErrorMessage";
import { ReadState } from "../types/ReadingState";

export async function getAllSnippets() : Promise<CodePost[] | ErrorMessage>{
    const resp = await fetch(`${import.meta.env.VITE_SERVER_URL}/code-posts`);
    if(!resp.ok){
        return {error:"Cannot get all code posts info."};
    }
    const posts:CodePost[] = await resp.json();
    return posts;
}

export async function getCodeSnippet(id: string): Promise<CodePost | ErrorMessage> {
    const resp = await fetch(`${import.meta.env.VITE_SERVER_URL}/code-posts/${id}`);
    if(!resp.ok) {
        return {error: "Could not find specified code post"};
    }
    const post: CodePost = await resp.json();
    return post;
}

export async function getCodeSnippetsOfUser(ids: string[]) {
    const snippets: CodePost[] = [];
    let state: ReadState = "Done"; /* Done-get all snippets, Undone-get some part, Error-get nothing */
    
    for(const id of ids) {
        const snippet = await getCodeSnippet(id);
        if(!("error" in snippet)) {
            snippets.push(snippet);
        } else {
            state = "Undone";
        }
    }
    
    if(snippets.length === 0 && ids && ids.length !== 0) state = "Error";
    return {snippets, state};
}