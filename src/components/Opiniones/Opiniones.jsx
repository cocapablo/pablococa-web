import React from 'react'

// Objective: import the custom hook useOpiniones and use it to fetch the expectativas
// from the API and render them in the Opiniones component.
import { useOpiniones } from './hooks/useOpiniones.js';
import { TarjetaPanel } from '../comunes/Tarjetas/TarjetaPanel.jsx';

export function Opiniones() {
    const { opiniones, error } = useOpiniones();
    
    //Error
    if (error) {
        return (
            <section className="tarjeta-panel">   
                <h2>Error al cargar las opiniones del público</h2>
            </section>
        )

    }   

    console.log(opiniones);

  // Exitoso  
  return (
    
     <TarjetaPanel titulo="Opiniones del público" datosTarjetas={opiniones} ></TarjetaPanel>
  )
}