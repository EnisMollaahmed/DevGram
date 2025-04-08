import { useEffect, useState } from "react";
import { getSpecificComments } from "../api/commentsAPI";
import { Comment } from "../types/CommentType";
import { ReadState } from "../types/ReadingState";

export default function useSpecificComments(commentIds: string[] | null) {
    const [comments, setComments] = useState<Comment[]>([]);
    const [status, setStatus] = useState<ReadState>("Done"); 
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        const fetchComments = async () => {
            if (!commentIds) {
                setComments([]);
                setStatus("Done");
                return;
            }

            setLoading(true);
            try {
                const resp = await getSpecificComments(commentIds);
                setStatus(resp.state);
                setComments(resp.comments);
            } catch (err) {
                console.log(err);
                setStatus("Error");
                setComments([]);
            } finally {
                setLoading(false);
            }
        };

        fetchComments();
    }, [commentIds]);  // Only depend on commentIds

    return { comments, status, loading };
}