import { useEffect, useState } from 'react';
import { getCodeSnippetsOfUser } from '../api/codeSnippetsAPI';
import { CodePost } from '../types/CodePostType';
import { ReadState } from '../types/ReadingState';

export default function useSpecificCodeSnippets(snippetsIds: string[] | null) {
    const [snippets, setSnippets] = useState<CodePost[]>([]);
    const [status, setStatus] = useState<ReadState>("Done");
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        const fetchSnippets = async () => {
            if (!snippetsIds) {
                setSnippets([]);
                setStatus("Done");
                return;
            }

            setLoading(true);
            try {
                const resp = await getCodeSnippetsOfUser(snippetsIds);
                setStatus(resp.state);
                setSnippets(resp.snippets);
            } catch (err) {
                console.log(err);
                setStatus("Error");
                setSnippets([]);
            } finally {
                setLoading(false);
            }
        };

        fetchSnippets();
    }, [snippetsIds]);  // Only depend on snippetsIds

    return { snippets, status, loading };
}