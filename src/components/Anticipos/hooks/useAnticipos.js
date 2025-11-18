import { useState, useEffect, useContext } from 'react';
import { getAnticipos } from '../services/anticipos.js';
import { AnticiposContext } from '../contexts/anticiposContext.jsx';

export function useAnticipos() {
    const {anticipos, setAnticipos} = useContext(AnticiposContext);
    console.log('Anticipos del Context', anticipos);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchAnticipos = async () => {
            try {
                const anticiposDevueltos = await getAnticipos();
                setError(false);
                setAnticipos(anticiposDevueltos);
                
            } catch (error) {
                setError(true);
                console.error('Error fetching anticipos', error);
            }
        };

        // Check if anticipos are already loaded
        // If they are, we don't need to fetch them again
        if (anticipos.length > 0) {
            setLoading(false);
            return;
        }
        // No anticipos loaded, fetch them
        fetchAnticipos();
        setLoading(false);
    }, []);

    return { anticipos, loading, error };
    
}