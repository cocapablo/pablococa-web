// Objective: export a custom hook to fetch videos from the API
// and use it in the VideosPanel component.
import { useState, useEffect } from 'react';
import { getVideos } from '../services/videos.js';

export function useVideos() {
    const [videos, setVideos] = useState([]);
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

        fetchVideos();
    }, []);

    return { videos, error };
}