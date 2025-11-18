// Objective: export a custom hook to fetch videos from the API
// and use it in the VideosPanel component.
import { useState, useEffect, useContext } from 'react';
import { VideosContext } from '../contexts/videosContext.jsx';
import { getVideos } from '../services/videos.js';

export function useVideos() {
    const {videos, setVideos} = useContext(VideosContext);
    console.log('Videos del Context', videos);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    

    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const videosDevueltos = await getVideos();
                setError(false);
                setVideos(videosDevueltos);
                
            } catch (error) {
                setError(true);
                console.error('Error fetching videos', error);
            }
        };

        // Chequea si ya hay videos cargados
        // Si ya hay videos, no hace falta volver a cargarlos
        if (videos.length > 0) {
            setLoading(false);
            return;
        }

        // No hay videos, las cargo
        /* setTimeout(() => {
            fetchVideos();
            setLoading(false);
        }, 3000); // Simulate a delay for loading state */
        
        
        fetchVideos();
        setLoading(false); 
        
    }, []);

    return { videos, loading, error };
}