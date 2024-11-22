import React, { useEffect, useRef, useState } from 'react'
import "./BuscadorDePeliculas.css";
import { Movies } from './Movies.jsx';
import { useMovies } from './hooks/useMovies.js';
import { useSearch } from './hooks/useSearch.js';


function BuscadorDePeliculas() {
  const { search, updateSearch, error: errorSearch }  = useSearch();
  const { movies, loading, error: errorMovies, getMovies } = useMovies({search});
  

  const renderizados = useRef(0); //Valor que persiste entre renderizados pero al cambiar no genera un nuevo renderizado

  renderizados.current++;
  console.log("Renderizados: ", renderizados.current);
  

  const handleSubmit = (event) => {
    event.preventDefault();
       
    console.log({search});

    getMovies();

  }
  
  const handleChange = (event) => {
    updateSearch(event.target.value);
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