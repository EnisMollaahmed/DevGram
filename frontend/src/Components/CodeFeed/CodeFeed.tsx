import {  Card } from "react-bootstrap";
import { CodePost } from "../../types/CodePostType";
import Loading from "../LoadingComp/Loading";

export default function CodeFeed({
  ref,
  data,
  isLoading,
}: {
  ref: (node?: Element | null) => void;
  data: CodePost[];
  isLoading: boolean;
}) {
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        data.map((post, index) => (
          index === data.length - 1 ? (
            <Card ref={ref} key={index}>
              <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>
                  {post.tags.map((tag, tagIndex) => (
                    <span key={tagIndex}>{tag}</span>
                  ))}
                </Card.Text>
              </Card.Body>
            </Card>
          ) : (
            <Card key={index}>
              <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>
                  {post.tags.map((tag, tagIndex) => (
                    <span key={tagIndex}>{tag}</span>
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