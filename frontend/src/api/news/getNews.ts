import { News } from "../../types/NewsType";
import { ErrorMessage } from "../../types/ErrorMessage";

export async function getOneNews(id:string): Promise<News | ErrorMessage>{
    const resp = await fetch(`${import.meta.env.VITE_NEWS_URL}/${id}`);
    if(!resp.ok){
        return {error: "Can't get the info about the page"};
    }
    const data:News = await resp.json();
    return data;
}