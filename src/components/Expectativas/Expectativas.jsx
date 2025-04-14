import React from 'react'


// Objective: import the custom hook useExpectativas and use it to fetch the expectativas
// from the API and render them in the Expectativas component.
import { useExpectativas } from './hooks/useExpectativas.js';
import { TarjetaPanel } from '../comunes/Tarjetas/TarjetaPanel.jsx';

export function Expectativas() {
    const { expectativas, error } = useExpectativas();
    
    //Error
    if (error) {
        return (
            <section className="tarjeta-panel">   
                <h2>Error al cargar las expectativas</h2>
            </section>
        )

    }   

    console.log(expectativas);

  // Exitoso  
  return (
    
     <TarjetaPanel titulo="¿Qué puedo esperar de esta web?" datosTarjetas={expectativas} ></TarjetaPanel>
  )
}
