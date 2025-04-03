import useInfiniteFetch from "../hooks/useInfiniteFetch"
import { CodePost } from "../types/CodePostType"
import { useState } from "react";

const reqObj:RequestInit = {method:"GET", headers:{"Content-Type":"application/json"}}

export default function CodesPage(){
    const [page, setPage] = useState<number>(1);
    const {error, data, isLoading, hasMore} = useInfiniteFetch<CodePost>(import.meta.env.VITE_CURR_URL, page, reqObj);
    return (
        <main>
            
        </main>
    )
}