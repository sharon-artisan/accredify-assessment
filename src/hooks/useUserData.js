/*
    This hook is used to get the user data from the API.
    This will be used and called in multiple places so I created it as a hook.
*/
import { useEffect, useState } from 'react';
import { getUser } from "../services/dataServices.js";

export function useUserData() {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        getUser()
            .then(data => {
                setUserData(data);
                setLoading(false); 
            })
            .catch(err => {
                setError(err);
                setLoading(false);
            });
    }, []);

    return { userData, loading, error };
}