import { useState, useEffect } from 'react';
import useFetch from './useFetch';

export default function useInfiniteFetch<T extends {id:string}>(url: string, page: number, options: RequestInit) {
    const [data, setData] = useState<T[]>([]);
    const [hasMore, setHasMore] = useState(true);
    const { error, result, isLoading, total } = useFetch<T[]>(`${url}?_page=${page}`, options);

    useEffect(() => {
        if (result ) {
            setData(prev => {
                return [...new Set([...prev, ...result])].filter((obj, index, self) => index === self.findIndex((item) => item.id === obj.id));
            });
            
            // Update hasMore based on whether we've fetched all items
            setHasMore(data.length < total);
        }
    }, [ result, total]);
    return { error, data, isLoading, hasMore };
}