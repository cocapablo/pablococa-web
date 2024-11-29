import React, { useEffect, useRef, useState, useCallback } from 'react'
import "./BuscadorDePeliculas.css";
import { Movies } from './Movies.jsx';
import { useMovies } from './hooks/useMovies.js';
import { useSearch } from './hooks/useSearch.js';
import debounce from "just-debounce-it";


function BuscadorDePeliculas() {
  const [sort, setSort] = useState(false);
  const { search, updateSearch, error: errorSearch }  = useSearch();
  const { movies, loading, error: errorMovies, getMovies } = useMovies({search, sort});

  const debouncedGetMovies = useCallback( 
    debounce(search => {
      console.log("Search: ", search);
      getMovies({search});
  }, 300)
  , [getMovies]);
  
  

  const renderizados = useRef(0); //Valor que persiste entre renderizados pero al cambiar no genera un nuevo renderizado

  renderizados.current++;
  console.log("Renderizados: ", renderizados.current);
  
  const handleSort = () => {
    setSort(!sort);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
       
    console.log({search});

    getMovies({search});

  }
  
  const handleChange = (event) => {
    const newSearch = event.target.value;
    updateSearch(newSearch);
    //getMovies({search: newSearch});
    debouncedGetMovies(newSearch);
  }

 

  return (
    <div className='page'>
      <header>
        <h2>Bienvenido al Mejor Buscador de Peliculas del Universo conocido</h2>
      
        <form className='form' onSubmit={handleSubmit}>
          <input style={{
            border: "1px solid transparent",
            borderColor: errorSearch ? "red" : "transparent"
          }} 
          value={search} name="query" type='text' onChange={handleChange} placeholder='Avengers, The Matrix, Star Wars, Los bañeros más locos del mundo... '></input>
          <label htmlFor="sortCheckBox">Ordenar</label> 
          <input type='checkbox' name="sortCheckBox" style={{margin: "5px"}} onChange={handleSort} checked={sort}></input>
          <button type='submit'>Buscar</button>
        </form>

        {errorSearch && <p style={{color: "red"}}> {errorSearch} </p>}
      </header>

      <main>
          {
            errorMovies ? 
            <p style={{color: "red"}}> {errorMovies} </p>
            :
            loading ? <p>Cargando...</p> : <Movies movies={ movies }></Movies>
          }
           
      </main>
    </div>
    
  )
}



export default BuscadorDePeliculas