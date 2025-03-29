import { useState, useEffect } from 'react';
import { getAnticipos } from '../services/anticipos.js';

export function useAnticipos() {
    const [anticipos, setAnticipos] = useState([]);
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

        fetchAnticipos();
    }, []);

    return { anticipos, error };
}