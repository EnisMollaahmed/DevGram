import {  Card } from "react-bootstrap";
import { CodePost } from "../../types/CodePostType";
import Loading from "../LoadingComp/Loading";
import './CodeFeed.css'
import { useNavigate } from "react-router";

export default function CodeFeed({
  ref,
  data,
  isLoading,
}: {
  ref: (node?: Element | null) => void;
  data: CodePost[];
  isLoading: boolean;
}) {
    const navigate = useNavigate();
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        data.map((post, index) => (
          index === data.length - 1 ? (
            <Card onClick={()=>navigate(`/codepage/${post.id}`)} ref={ref} key={index} className='snippet-card'>
                <Card.Body>
                    <Card.Title className='card-title'>{post.title}</Card.Title>
                    <Card.Text className='card-tag-container'>
                    {post.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className='card-tag'>{tag}</span>
                    ))}
                    </Card.Text>
                </Card.Body>
            </Card>
          ) : (
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
        ))
      )}
    </>
  );
}