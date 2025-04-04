import { Card } from "react-bootstrap"

export default function CommentComponent({publishingDate, author, content}:{publishingDate:Date, author:string, content:string}){
    return(
        <Card className="comment-card">
            <Card.Header className="comment-header">{`${new Date(publishingDate).getDate()}.${new Date(publishingDate).getMonth()}.${new Date(publishingDate).getFullYear()}`}</Card.Header>
            <Card.Body className="comment-body">
                <Card.Title className="comment-author">{author}</Card.Title>
                <Card.Text className="comment-description">
                    {content}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}