// Objective: export a custom hook to fetch expectativas from the API
// and use it in the Expectativas component.
import { useState, useEffect, useContext } from 'react';
import { ExpectativasContext } from '../contexts/expectativasContext.jsx';
import { getExpectativas } from '../services/expectativas.js';

export function useExpectativas() {
    const {expectativas, setExpectativas} = useContext(ExpectativasContext);
    console.log('Expectativas del Context', expectativas);
    // Check if expectativas is already loaded
    // If it is, we don't need to fetch them again
    // State to manage loading and error states
    const [loading, setLoading] = useState(true);
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

        // Chequea si ya hay expectativas cargadas
        // Si ya hay expectativas, no hace falta volver a cargarlas
        if (expectativas.length > 0) {
            setLoading(false);
            return;
        }

        // No hay expectativas, las carga
        /* setTimeout(() => {
            fetchExpectativas();
            setLoading(false);
        }, 3000); // Simulate a delay for loading state */
        fetchExpectativas();
        setLoading(false);
    }, []);

    return { expectativas, loading, error };
}
