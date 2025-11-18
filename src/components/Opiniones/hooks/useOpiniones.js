// Objective: export a custom hook to fetch expectativas from the API
// and use it in the Opiniones component.
import { useState, useEffect,useContext } from 'react';
import { OpinionesContext } from '../contexts/opinionesContext.jsx';
import { getOpiniones } from '../services/opiniones.js';

export function useOpiniones() {
    const {opiniones, setOpiniones} = useContext(OpinionesContext);
    console.log('Opiniones del Context', opiniones);
    // State to manage loading and error states
    const [loading, setLoading] = useState(true);
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

        // Chequea si ya hay opiniones cargadas
        // Si ya hay opiniones, no hace falta volver a cargarlas
        if (opiniones.length > 0) {
            setLoading(false);
            return;
        }

        // No hay opiniones, las carga
        /* setTimeout(() => {
            fetchOpiniones();
            setLoading(false);
        }, 3000); // Simulate a delay for loading state */
        fetchOpiniones();
        setLoading(false);
    }, []);

    return { opiniones, loading, error };
}