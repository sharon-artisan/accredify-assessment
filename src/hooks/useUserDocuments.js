/*
    This hook is used to get the user documents from the API.
    This will be used and called in multiple places so I created it as a hook.
*/
import { useEffect, useState } from 'react';
import { getUserDocuments } from "../services/dataServices.js";

export function useUserDocuments() {
    const [userDocumentsData, setUserDocumentsData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        getUserDocuments()
            .then(data => {
                setUserDocumentsData(data);
                setLoading(false); 
            })
            .catch(err => {
                setError(err);
                setLoading(false);
            });
    }, []);

    return { userDocumentsData, loading, error };
}