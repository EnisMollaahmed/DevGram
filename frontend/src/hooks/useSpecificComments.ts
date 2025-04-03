import { useEffect, useState } from "react";

export default function useSpecificComments(commentIds:string[]){
    const [comments, setComments] = useState<Comment[]>([]);
    
}