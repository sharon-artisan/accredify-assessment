/*
    This hook is used to get the user goals from the API.
    This will be used and called in multiple places so I created it as a hook.
*/
import { useEffect, useState } from 'react';
import { getUserCareerGoals } from "../services/goalsServices.js";

export function useUserGoals() {
    const [userGoalsData, setUserGoalsData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        getUserCareerGoals()
            .then(data => {
                setUserGoalsData(data);
                setLoading(false); 
            })
            .catch(err => {
                setError(err);
                setLoading(false);
            });
    }, []);

    return { userGoalsData, loading, error };
}