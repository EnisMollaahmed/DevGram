import { CodePost } from "../../types/CodePostType";
import { ErrorMessage } from "../../types/ErrorMessage";

export async function getAllSnippets() : Promise<CodePost[] | ErrorMessage>{
    const resp = await fetch(`${import.meta.env.VITE_SERVER_URL}/code-posts`);
    if(!resp.ok){
        return {error:"Cannot get all code posts info."};
    }
    const posts:CodePost[] = await resp.json();
    return posts;
}

export async function getCodeSnippet(id:string) {
    const resp = await fetch(`${import.meta.env.VITE_SERVER_URL}/code-posts/${id}`);
    if(!resp.ok){
        return {error:"Could not find specified code post"};
    }
    const post:CodePost = await resp.json();
    return post;
}