import { useOutletContext, useNavigate } from "react-router";

import { OutletUserContext, User } from '../../../types/UserType';
import useSpecificCodeSnippets from "../../../hooks/useSpecificCodeSnippets";

import Loading from "../../LoadingComp/Loading";

import {Card} from 'react-bootstrap'
import ErrorMessage from "../../ErrorMessage/ErrorMessage";

export default function MyCodes(){
    const {userInfo,} = useOutletContext<OutletUserContext>();
    console.log(userInfo)
    const {snippets, status, loading} = useSpecificCodeSnippets((userInfo as User).idOfPostedCodes);
    console.log(snippets);
    const navigate = useNavigate()
    return (
        <>
            {loading && <Loading/>}
            {snippets.map((post, index)=>{
                return(
                    <Card onClick={()=>navigate(`/codepage/${post.id}`)} key={index} className='snippet-card'>
                        <Card.Body>
                            <Card.Title className='card-title'>{post.title}</Card.Title>
                            <Card.Text className='card-tag-container'>
                            {post.tags.map((tag, tagIndex) => (
                                <span className='card-tag' key={tagIndex}>{tag}</span>
                            ))}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                )
            })}
            {status !== 'Done' && <ErrorMessage message="Could not load all components! Please try again later.."/>}
        </>
    )
}