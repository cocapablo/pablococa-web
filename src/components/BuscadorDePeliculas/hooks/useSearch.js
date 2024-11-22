import { useState, useEffect, useRef } from "react";

export function useSearch() {
    const [search, updateSearch] = useState("");
    const [error, setError] = useState(null);
    const isFirstInput = useRef(true);

    useEffect(() => {

        console.log("First Input", isFirstInput);
        
        if (isFirstInput.current) {
            if (search === "") 
                return;
            
            isFirstInput.current = false;
            
        }

        //Validaciones del form
        if (search.trim().length === 0) {
          setError("No se puede buscar una película vacía");
          return;
        }
    
        if (search.trim().length < 3) {
          setError("Los títulos de las peliculas deben tener al menos 3 caracteres");
          return;
        }
    
        //Todo Ok
        setError(null);
    
      }, [search]);

      return {
        search,
        updateSearch,
        error
      }

}