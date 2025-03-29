import React, { useEffect } from 'react';
import Link from "../Link.jsx";

function SearchPage({routeParams}) {
    useEffect(() => {
        document.title = `Buscando ${routeParams.query}`
    }, []);

    return (
      <>
        <h1>Buscador</h1>
        <p>Estás buscando {routeParams.query}</p>
        <Link to="/">Ir a Home</Link>
      </>
      
    )
}


export default SearchPage