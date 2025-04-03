import { News } from "./../types/NewsType";
import { ErrorMessage } from "./../types/ErrorMessage";
import { Message } from "./../types/Message";

export async function getOneNews(id:string): Promise<News | ErrorMessage>{
    const resp = await fetch(`${import.meta.env.VITE_NEWS_URL}/${id}`);
    if(!resp.ok){
        return {error: "Can't get the info about the page"};
    }
    const data:News = await resp.json();
    return data;
}

export async function putOneNews(id:string, news:News) : Promise<ErrorMessage | Message> {
    const resp = await fetch(`${import.meta.env.VITE_NEWS_URL}/${id}`, {
        method:"PUT",
        headers:{
            "Content-Type":'application/json'
        },
        body:JSON.stringify(news)
    });
    if(!resp.ok)
        return {error: "Cannot update the news object!"};
    else
        return {message: "Object was properly updated"};
}