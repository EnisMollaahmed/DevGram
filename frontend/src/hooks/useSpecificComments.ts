import { useEffect, useState } from "react";
import { getSpecificComments } from "../api/commentsAPI";
import { Comment } from "../types/CommentType";
import { ReadState } from "../types/ReadingState";

export default function useSpecificComments(commentIds:string[]){
    const [comments, setComments] = useState<Comment[]>([]);
    const [status, setStatus] = useState<ReadState>("Done"); 
    const [loading, setLoading] = useState<boolean>(false);
    setLoading(true);
    useEffect(()=>{
        getSpecificComments(commentIds).then(resp => {
            if(status !== resp.state) setStatus(resp.state);
            setComments(resp.comments);
        })
    }, [status]);
    if(status === "Done") setLoading(true);
    return {comments, status, loading};
}