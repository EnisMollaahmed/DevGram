import CodeDisplay from "../Components/CodeDisplay/CodeDisplay";
import { useParams } from "react-router";
import useFetch from "../hooks/useFetch";
import { CodePost } from "../types/CodePostType";
import ErrorMessage from "../Components/ErrorMessage/ErrorMessage";
import Loading from "../Components/LoadingComp/Loading";
import useSpecificComments from "../hooks/useSpecificComments";
import CommentComponent from "../Components/CommentComp/CommentComp";

const reqObj:RequestInit = {method:"GET", headers:{"Content-Type":"application/json"}}

export default function SnippetPage(){
    const {id} = useParams();
    const {error, result: post, isLoading} = useFetch<CodePost>(`${import.meta.env.VITE_SERVER_URL}/code-posts/${id}`, reqObj);
    const {comments, status, loading} = useSpecificComments(post?.commentsIds as string[]);
    const Snippet = ()=>{
        return (
            <>
                <CodeDisplay code={(post as CodePost).codeSnippet}/>
                <p className="issue-description">
                    {post?.issueDescription}
                </p>
                <p className='author-nickname'>{post?.author}</p>
                <textarea className="comment-textarea"></textarea>
                {loading && <Loading/>}
                {status === "Error" && <ErrorMessage message="Could not load the comments! Please try again later.."/>}
                {comments.map(comment => {
                    return (
                        <CommentComponent key={comment.id} author={comment.author} publishingDate={comment.publishingDate} content={comment.content}/>
                    );
                })} 
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