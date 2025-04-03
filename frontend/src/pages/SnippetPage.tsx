import CodeDisplay from "../Components/CodeDisplay/CodeDisplay";
import { useParams } from "react-router";
import useFetch from "../hooks/useFetch";
import { CodePost } from "../types/CodePostType";
import ErrorMessage from "../Components/ErrorMessage/ErrorMessage";
import Loading from "../Components/LoadingComp/Loading";

const reqObj:RequestInit = {method:"GET", headers:{"Content-Type":"application/json"}}

export default function SnippetPage(){
    const {id} = useParams();
    const {error, result: post, isLoading} = useFetch<CodePost>(`${import.meta.env.VITE_SERVER_URL}/code-posts/${id}`, reqObj);
    const Snippet = ()=>{
        return (
            <>
                <CodeDisplay code={(post as CodePost).codeSnippet}/>
                <p className="issue-description">
                    {post?.issueDescription}
                </p>
                <p className='author-nickname'>{post?.author}</p>
                 
            </>
        );
    }
    return (
        <>
            {isLoading && <Loading/>}
            {error ? <ErrorMessage message={error.message}/> : <Snippet/>}
        </>
    )
}