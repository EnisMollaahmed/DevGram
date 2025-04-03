import { useInView } from "react-intersection-observer";
import useInfiniteFetch from "../hooks/useInfiniteFetch"
import { CodePost } from "../types/CodePostType"
import { useEffect, useState } from "react";
//import ErrorMessage from "../Components/ErrorMessage/ErrorMessage";
import CodeFeed from "../Components/CodeFeed/CodeFeed";

const reqObj:RequestInit = {method:"GET", headers:{"Content-Type":"application/json"}}

export default function CodesPage(){
    const [page, setPage] = useState<number>(1);
    const {error, data, isLoading, hasMore} = useInfiniteFetch<CodePost>(`${import.meta.env.VITE_SERVER_URL}/code-posts`, page, reqObj);
    const {ref, inView} = useInView({threshold:0.1});
    useEffect(()=>{
        if(inView && hasMore && !isLoading && !error){
            setPage(prev=>prev + 1);
        }
    }, [inView])
    return (
        <>
            <CodeFeed data={data} ref={ref} isLoading={isLoading}/>{/*{error ? <ErrorMessage message={error.message}/> : */}
        </>
    )
}