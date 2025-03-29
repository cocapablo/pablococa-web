import React from 'react'
import "./Expectativas.css";
import { Expectativa, TIPO_TARJETA } from './Expectativa.jsx';

// Objective: import the custom hook useExpectativas and use it to fetch the expectativas
// from the API and render them in the Expectativas component.
import { useExpectativas } from './hooks/useExpectativas.js';

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
    <section className="tarjeta-panel">
        <h2>¿Qué puedo esperar de esta web?</h2>
        {   
            expectativas.map(expectativa => {
                if (expectativa.id <= 3){
                    return <Expectativa key={expectativa.id} titulo={expectativa.titulo} descripcion={expectativa.descripcion} tipo={TIPO_TARJETA.NORMAL}></Expectativa>
                } else {
                    return <Expectativa key={expectativa.id} titulo={expectativa.titulo} descripcion={expectativa.descripcion} tipo={TIPO_TARJETA.EXTRA}></Expectativa>
                }

            })
        }
     </section>
  )
}
