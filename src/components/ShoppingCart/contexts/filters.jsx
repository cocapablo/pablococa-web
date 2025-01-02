import { createContext, useState } from "react";

//1 - Crear el Contexto
//Este es el que tenemos que consumir
//ESTO es un Sinlgeton: solo se crea una vez
export const FiltersContext = createContext();

//2 - Crear el Provider, para que los componentes hijos puedan consumir el contexto
//Este es el que nos provee acceso a los datos
export function FiltersProvider({children}) {
    const [filters, setFilters] = useState({
        category: "all",
        minPrice: 0
    });

    return (
        <FiltersContext.Provider value={{filters, setFilters}}>
            {children}
        </FiltersContext.Provider>
    )
}

