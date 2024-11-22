import { searchMovies } from "../services/movies.js";
import { useState, useRef } from "react";

export function useMovies({search}) {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const previousSearch = useRef(search);

    
    const getMovies = async () => {
        if (search === previousSearch.current) return; //Si la b{usqueda es igual a la anterior no la hago de nuevo
        
        try {
            setLoading(true);
            setError(null);
            previousSearch.current = search;
            const newMovies = await searchMovies({search});

            setMovies(newMovies);
        }
        catch (e) {
            setError(e.message);
        }
        finally {
            setLoading(false);
        }
        

    }

    return({
        movies,
        loading,
        error, 
        getMovies
    });
}

