// Objective: export a custom hook to fetch expectativas from the API
// and use it in the Opiniones component.
import { useState, useEffect } from 'react';
import { getOpiniones } from '../services/opiniones.js';

export function useOpiniones() {
    const [opiniones, setOpiniones] = useState([]);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchOpiniones = async () => {
            try {
                const opinionesDevueltas = await getOpiniones();
                setError(false);
                setOpiniones(opinionesDevueltas);
                
            } catch (error) {
                setError(true);
                console.error('Error fetching opiniones', error);
            }
        };

        fetchOpiniones();
    }, []);

    return { opiniones, error };
}