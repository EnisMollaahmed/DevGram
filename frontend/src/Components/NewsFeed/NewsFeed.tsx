import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import useInfiniteFetch from "../../hooks/useInfiniteFetch";
import ErrorMessage from "./ErrorMessage";
import PositiveResolve from "./PositiveResolve";
import { News } from "../../types/NewsType";

const getReq: RequestInit = {
    method: "GET",
    headers: { "Content-Type": "application/json" }
};

export default function NewsFeed() {
    const [page, setPage] = useState(1);
    const { error, data, isLoading, hasMore } = useInfiniteFetch<News>(
        'http://localhost:8000/news',
        page,
        getReq
    );

    const [lastNewsRef, inView] = useInView({
        threshold: 0, 
        triggerOnce: false,
    });

    useEffect(() => {
        if (inView && hasMore && !isLoading) {
            setPage(prev => prev + 1);
        }
    }, [inView, hasMore, isLoading]);

    if (error) return <ErrorMessage message={error.message} />;

    return (
        <PositiveResolve
            isLoading={isLoading}
            newsfeed={data}
            lastNewsRef={lastNewsRef}
            hasMore={hasMore}
        />
    );
}