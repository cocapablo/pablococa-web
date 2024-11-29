import { searchMovies } from "../services/movies.js";
import { useState, useRef, useMemo, useCallback } from "react";

export function useMovies({search, sort}) {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const previousSearch = useRef(search);

    
    const getMovies = useCallback(async ({search}) => {
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
    }, []);

    
    const sortedMovies = useMemo(() => {
        let  validMovies;

        console.log("Ordenando movies");

        validMovies = sort ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
        :
        movies;

        return validMovies;
    }, [sort, movies]);
    

    
    

    return({
        movies: sortedMovies,
        loading,
        error, 
        getMovies
    });
}

