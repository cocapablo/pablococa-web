import { createContext, useState } from "react";

//1 - Crear el Contexto
//Este es el que tenemos que consumir
//ESTO es un Sinlgeton: solo se crea una vez
export const AnticiposContext = createContext();

//2 - Crear el Provider, para que los componentes hijos puedan consumir el contexto
//Este es el que nos provee acceso a los datos
export function AnticiposContextProvider({children}) {
    const [anticipos, setAnticipos] = useState([]);

    return (
        <AnticiposContext.Provider value={{anticipos, setAnticipos}}>
            {children}
        </AnticiposContext.Provider>
    )
}

