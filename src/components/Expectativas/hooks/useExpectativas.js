// Objective: export a custom hook to fetch expectativas from the API
// and use it in the Expectativas component.
import { useState, useEffect } from 'react';
import { getExpectativas } from '../services/expectativas.js';

export function useExpectativas() {
    const [expectativas, setExpectativas] = useState([]);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchExpectativas = async () => {
            try {
                const expectativasDevueltas = await getExpectativas();
                setError(false);
                setExpectativas(expectativasDevueltas);
                
            } catch (error) {
                setError(true);
                console.error('Error fetching expectativas', error);
            }
        };

        fetchExpectativas();
    }, []);

    return { expectativas, error };
}
