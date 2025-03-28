import { useState, useEffect } from 'react'

type FetchError = {message:string, status: number} | null;

export default function useFetch<T>(url:string, options:RequestInit){
    const [result, setResult] = useState<T | null>(null);
    const [error, setError] = useState<FetchError>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [total, setTotal] = useState<number>(0);


    useEffect(()=>{
        setIsLoading(true);
        fetch(url, options)
        .then(resp=> {
            return resp.json()})
        .then(data=>{
            console.log(data)
            if('data' in data) {
                setResult(data.data);
                setTotal(data.items);
            } // in case url consist _page query param
            else setResult(data);
            setIsLoading(false);
        })
        .catch(err => {
            setIsLoading(false);
            setError({message:err, status: 404})
        })
    }, [url, options]);

    return {error, result, isLoading, total};
}
