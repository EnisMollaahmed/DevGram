import { CodePost } from "../../types/CodePostType";
import { ErrorMessage } from "../../types/ErrorMessage";

export async function getAllSnippets() : Promise<CodePost[] | ErrorMessage>{
    const resp = await fetch(`${import.meta.env.VITE_CURR_URL}/code-posts`);
    if(!resp.ok){
        return {error:"Cannot get all code posts info."};
    }
    const posts = await resp.json();
    return posts;
}