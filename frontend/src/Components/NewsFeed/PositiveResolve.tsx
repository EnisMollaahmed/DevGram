import { Card, Spinner } from "react-bootstrap";
import { News } from "../../types/NewsType";
import "./NewsFeed.css";
import { useNavigate } from "react-router";

type PositiveResolveProps = {
    isLoading: boolean;
    newsfeed: News[] | null;
    lastNewsRef: (node?: Element | null) => void;
    hasMore: boolean;
};

export default function PositiveResolve({
    isLoading,
    newsfeed,
    lastNewsRef,
    hasMore
}: PositiveResolveProps) {
    const navigate = useNavigate();

    return (
        <section className="news-feed-container">
            {newsfeed?.map((news, index) => {
                const isLastItem = index === newsfeed.length - 1;
                return (
                    <Card
                        key={news.id}
                        ref={isLastItem ? lastNewsRef : null}
                        className="news-card mb-3"
                        onClick={() => navigate(`newspage/${news.id}`)}
                    >
                        <Card.Img variant="top" src={news.imageUrl} className="news-image" />
                        <Card.Body>
                            <Card.Title className="news-title">{news.title}</Card.Title>
                            <Card.Text className="news-description">
                                {news.shortDescription}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                );
            })}

            {isLoading && (
                <section className="text-center my-4">
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading more news...</span>
                    </Spinner>
                </section>
            )}

            {!hasMore && newsfeed && newsfeed.length > 0 && (
                <section className="text-center my-4 text-muted">
                    You've seen all the latest news
                </section>
            )}
        </section>
    );
}