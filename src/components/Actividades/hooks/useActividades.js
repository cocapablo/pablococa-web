import { useState, useEffect } from 'react';
import { getActividades } from '../services/actividades.js';

export function useActividades() {
    const [actividades, setActividades] = useState([]);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchActividades = async () => {
            try {
                const actividadesDevueltas = await getActividades();
                setError(false);
                setActividades(actividadesDevueltas);
                
            } catch (error) {
                setError(true);
                console.error('Error fetching actividades', error);
            }
        };

        fetchActividades();
    }, []);

    return { actividades, error };
}